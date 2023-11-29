import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const id = params.id;
  console.log("GET", searchParams );
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/`);
  const data = await res.json();
  return NextResponse.json({ message: { data } });
}

export async function POST(request) {
    // const id = params.id;
    const data =  await request.json();
    console.log(data);
  return NextResponse.json(data);
}

export async function PUT() {
  return NextResponse.json({ message: "update data" });
}

export async function DELETE() {
  return NextResponse.json({ message: "delete data" });
}
