import React , { useEffect } from "react";

import {
    useQuery,
    gql
} from "@apollo/client";

import { USERS_QUERIES } from "../../GraphQL/Queries";

export default function Home(): React.ReactElement {

    const { error , loading , data } = useQuery(USERS_QUERIES);
    
    useEffect(() => {
        console.log(data);
    } , [data])

    return(
        <>

         <h1> Hello World </h1>
         
        </>
    )
}