import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const doneParam = searchParams.get('done')
    let todos
    try {
        if (doneParam === 'true') {
            todos = await prisma.todo.findMany({
                where: { done: true }
            })
        } else if (doneParam === 'false') {
            todos = await prisma.todo.findMany({
                where: { done: false }
            })
        } else {
            todos = await prisma.todo.findMany()
        }
        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json({ error: 'Could not fetch todos' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const { text } = await req.json() // gets text property from JSON payload of request
    const newTodo = await prisma.todo.create({
        data: {
            text,
            done: false
        }
    })
    return NextResponse.json({ newTodo })
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (id === null) {
        return NextResponse.json({ error: 'Could not find todo to delete' }, { status: 400 });
    }
    console.log("in backend id")
    console.log(id)
    try {
        const deletedTodo = await prisma.todo.delete({
            where: { id: Number(id) },
        })
        return NextResponse.json({ id: deletedTodo.id })
    } catch (error) {
        return NextResponse.json({ error: 'Could not delete todo' }, { status: 500 })
    }
}

export async function PATCH(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (id === null) {
        return NextResponse.json({ error: 'Could not find todo' }, { status: 400 });
    }
    try {
        const existingTodo = await prisma.todo.findUnique({
            where: { id: Number(id) },
          });
          if (!existingTodo) {
            return NextResponse.json({ error: 'Could not find todo' }, { status: 404 });
          }
        const updatedTodo = await prisma.todo.update({
            where: { id: Number(id) },
            data: { done: !existingTodo.done },
        })
        return NextResponse.json({ id: updatedTodo.id })
    } catch (error) {
        return NextResponse.json({ error: 'Could not update todo' }, { status: 500 });
    }
}

// GET /api/todos/completed: Retrieve only the completed todo items.


// GET /api/todos/incomplete: Retrieve only the incomplete todo items.