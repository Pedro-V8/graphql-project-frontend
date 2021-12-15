import React from "react";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

export default function Home(): React.ReactElement {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache()
    })
    return(
        <>
            <ApolloProvider client={ client }>
                <>
                    {
                        client.query({
                            query: gql`
                                query users{
                                    _id
                                    name
                                    email
                                }
                            `
                        })
                        .then(result => console.log(result))
                    }
                </>
            </ApolloProvider>
        </>
    )
}