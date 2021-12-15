import React , { useEffect } from "react";

import {
    useQuery,
    gql
} from "@apollo/client";

import { USERS_QUERIES } from "../../GraphQL/Queries";

export default function Home(): React.ReactElement {

    const { error , loading , data } = useQuery(USERS_QUERIES.userById() , {
        variables: { userId: "61b23d6a9363a7e86afea153" }
    });
    
    useEffect(() => {
        console.log(data);
    } , [data])

    return(
        <>

         <h1> Hello World </h1>
         
        </>
    )
}