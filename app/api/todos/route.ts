import { NextRequest, NextResponse } from "next/server";

let todos = [{ id: 1, text: "wash dishes", done: false }]

export async function GET() {
    return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
    const { text } = await req.json() // gets text property from JSON payload of request
    const newTodo = { id: Date.now(), text, done: false };
    todos.push(newTodo);
    console.log(todos)
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
    todos = todos.filter((todo) => todo.id !== +id)
    return NextResponse.json({ id });
}

export async function PATCH(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (id === null) {
        return NextResponse.json({ error: 'Could not find todo' }, { status: 400 });
    }
    todos = todos.map((todo) => (todo.id === +id ? { ...todo, done: !todo.done } : todo))
    return NextResponse.json({ id })
}