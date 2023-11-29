import { NextResponse } from "next/server";
import { getClient } from "@/app/lib/client";
import { GET_RUTAS } from "@/app/api/graphql/querys";

const query = GET_RUTAS;

export async function GET() {
    const { data } = await getClient().query({ query,
        context: {
        //   fetchOptions: {
        //     next: { revalidate: 5 },
        //   },
        }, 
        headers: {
            "Content-Type": "application/json",
          },
    });
      const rutas = data.rutas.nodes;
    
      console.log("Rutas", rutas);
  return NextResponse.json( {rutas} );
}

  