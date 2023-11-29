import { NextResponse } from "next/server";
import { getClient } from "@/app/lib/client";
import { GET_RUTA } from "@/app/api/graphql/querys";

const query = GET_RUTA;

export async function GET(request, { params }) {
  const slug = params.slug;
  const { data } = await getClient().query({ query,
    variables: { id: slug },
    context: {
    //   fetchOptions: {
    //     next: { revalidate: 5 },
    //   },
    }, 
    headers: {
        "Content-Type": "application/json",
      },
});
  const ruta = data.ruta;

  console.log("Rutas", data.ruta);
  return NextResponse.json({ruta});
}

export async function POST(request, { params }) {
  const slug = params.slug;
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ message: `Create ruta ${slug}` });
}

export async function PUT(request, { params }) {
  const slug = params.slug;
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ message: `Update ruta ${slug}` });
}

export async function DELETE(request, { params }) {
  const slug = params.slug;
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ message: `Delete ruta ${slug}` });
}
