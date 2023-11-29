// lib/client.js
import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const GRAPHQL_NEXT_BASE_URL =  process.env.GRAPHQL_NEXT_BASE_URL;
console.log("GRAPHQL_BASE_URL", GRAPHQL_NEXT_BASE_URL);

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_NEXT_BASE_URL,
      connectToDevTools: false,
    }),
  });
});