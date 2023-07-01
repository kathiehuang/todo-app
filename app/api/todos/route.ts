import { NextRequest, NextResponse } from "next/server";

const todos = [{ id: 1, text: "wash dishes", done: false }]

    export async function GET(request: Request) {
        return NextResponse.json(todos)
        // const res = await fetch('/', {
        //     method: 'GET',
        // })
        // const data = await res.json()
        // return NextResponse.json({data})
    }

    // export async function POST(req: Request) {
    //     const res = await fetch('/', {
    //         method: 'POST',
    //         body: JSON.stringify({ text: req.body }),
    //     })
    //     const data = await res.json()
    //     const { text } = req.body.;
    //     const newTodo = { id: Date.now(), text, done: false };
    //     todos.push(newTodo);
    //     return NextResponse.json({ data })
    // }