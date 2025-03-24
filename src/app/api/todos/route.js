import { NextResponse } from "next/server";
import { getTasks, addTask } from "@/lib/taskStore";

export async function GET() {
  const tasks = await getTasks();
  return NextResponse.json(Array.isArray(tasks) ? tasks : []);
}

export async function POST(request) {
  const { text } = await request.json();
  const newTask = {
    id: Date.now(),
    text,
    completed: false,
  };
  await addTask(newTask);
  return NextResponse.json(newTask, { status: 201 });
}



