import { NextRequest, NextResponse } from "next/server";

let todos = [{ id: 1, text: "wash dishes", done: false }]

export async function GET() {
    return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
    const { text } = await req.json()
    const newTodo = { id: Date.now(), text, done: false };
    todos.push(newTodo);
    console.log(todos)
    return NextResponse.json({ newTodo })
}

// export async function DELETE(req: NextRequest) {
//     console.log(req)
//     const id = parseInt(req.params.id, 10);
//     todos = todos.filter((todo) => todo.id !== id)
//     return NextResponse.json({ id });
// }