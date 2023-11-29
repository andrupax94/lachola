import { NextResponse } from "next/server";
import { getClient } from "@/app/lib/graph-next-client";
import { GET_TASKS } from "@/app/api/graphql/querys";

const query = GET_TASKS;

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
      const tasks = data;
      console.log("Tasks", tasks);

  return NextResponse.json( {tasks} );
}

  