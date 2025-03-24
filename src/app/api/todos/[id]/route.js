import { NextResponse } from "next/server";
import { deleteTask, updateTask } from "@/lib/taskStore";

export async function DELETE(request, { params }) {
  const { id } = await params;
  await deleteTask(id);
  return NextResponse.json({ success: true });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const { completed } = await request.json();
  const updatedTask = await updateTask(id, { completed });
  if (updatedTask) {
    return NextResponse.json(updatedTask);
  }
  return NextResponse.json({ error: "Task not found" }, { status: 404 });
}
