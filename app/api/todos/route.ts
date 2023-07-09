import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
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

// export async function PATCH(req: NextRequest) {
//     const { searchParams } = new URL(req.url)
//     const id = searchParams.get('id')
//     if (id === null) {
//         return NextResponse.json({ error: 'Could not find todo' }, { status: 400 });
//     }
//     todos = todos.map((todo) => (todo.id === +id ? { ...todo, done: !todo.done } : todo))
//     return NextResponse.json({ id })
// }