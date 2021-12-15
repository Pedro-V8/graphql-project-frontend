import React from "react";
import Home from "./components/Home";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,

} from "@apollo/client";

export default function App(): React.ReactElement{

    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache()
    })

    return (
        <>
            <ApolloProvider client = { client }>
                <Home />
            </ApolloProvider>
        </>
    )

}