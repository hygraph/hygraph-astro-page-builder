import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(import.meta.env.HYGRAPH_ENDPOINT)

export default client;