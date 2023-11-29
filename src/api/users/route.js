import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
  return NextResponse.json({ message: {data} });
}

export async function POST(request, { params }) {
    // const id = params.id;
    const data = await request.json();
    console.log(data);
  return NextResponse.json({ message: 'create data' });
}

export async function PUT() {
    return NextResponse.json({ message: "update data" });
  }

  export async function DELETE() {
    return NextResponse.json({ message: "delete data" });
  }
  
  