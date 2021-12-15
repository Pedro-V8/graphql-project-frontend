import { gql } from '@apollo/client';

export const USERS_QUERIES = gql`
    query{
        users{
            _id
            name
            email
        }
    }
` 