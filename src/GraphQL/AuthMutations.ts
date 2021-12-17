import { gql } from '@apollo/client';

export const USERS_MUTATIONS = gql`
    mutation authenticate(
        $email: String
        $password: String
    ) {
        authenticate(data: { email: $email , password: $password }){
           user {
                _id
                name
                email
            }     
            token
            error
        }
    }
`