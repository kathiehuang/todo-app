'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import '@fontsource/open-sans';
import '@fontsource/roboto';

export default function HomePage() {
    const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        getTodos();
    }, [])

    useEffect(() => {
        getTodos();
      }, [todos]); 


    const getTodos = async() => {
        try {
            const response = await axios.get("/api/todos")
            console.log("getting todos")
            console.log(response)
            setTodos(response.data)
        } catch (error) {
            console.error("Error fetching todos: ", error)
        }
    }

    const addTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input) return;
        try {
            const data = {
                text: input,
            }
            const response = await axios.post("/api/todos", data)
            console.log("adding todo")
            setTodos([...todos, response.data.newTodo])
            setInput("");
        } catch (error) {
            console.log("Error adding todo: ", error)
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            const response = await axios.delete(`/api/todos?id=${id}`)
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.log("Error deleting todo: ", error)
        }
    };

    const markTodo = async (id: number) => {
        try {
            const response = await axios.patch(`api/todos?id=${id}`)
            setTodos(
                todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
            );
        } catch (error) {
            console.log("Error marking todo as done: ", error)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center pb-28">
            <div className="rounded-lg bg-white shadow-lg p-8">
                <h1 className="text-2xl text-center mb-6 font-sans font-bold text-emerald-700">to-do app</h1>
                <form onSubmit={addTodo} className="mb-4">
                    <div className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-grow px-4 py-2 border border-gray-00 rounded focus:outline-none focus:ring-1 mx-2 focus:ring-emerald-500"
                            placeholder="add a todo"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-emerald-500 text-white rounded focus:outline-none hover:bg-emerald-600 transition duration-200"
                        >
                            add
                        </button>
                    </div>
                </form>
                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex items-center justify-between p-2 border rounded-md transition duration-200 ${todo.done ? "bg-green-50" : ""
                                }`}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => markTodo(todo.id)}
                                    className="mr-2 accent-gray-600 ring-blue-500 rounded"
                                />
                                {todo.text}
                            </div>
                            <button
                                className="text-red-500 focus:outline-none hover:text-red-700"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 8a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1H7a1 1 0 01-1-1V8zm1-2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2H7zm4-2a1 1 0 011 1v1h2a1 1 0 110 2h-1v2a1 1 0 11-2 0V8H9a1 1 0 010-2h2V5a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
