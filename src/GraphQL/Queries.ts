import { gql } from '@apollo/client';

/*export const USERS_QUERIES = gql`
    query{
        users{
            _id
            name
            email
        }
    }
` */



export const USERS_QUERIES = {
    users: () => {
        return gql `
            query{
                users{
                    _id
                    name
                    email
                }
            }
        `
    },
    userById: () => {
        // console.log(idT)
        return gql`
            query($userId: String){
                user(id: $userId){
                    _id
                    name
                    email
                }
            }
        `
    }
}