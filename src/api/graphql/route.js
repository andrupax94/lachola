import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
import { resolvers } from "@/app/api/graphql/resolvers";
import { typeDefs } from "@/app/api/graphql/typeDefs";
import  {connectDB} from '@/app/api/graphql/db'

connectDB();

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
