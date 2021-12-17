import { Post } from './Post'

export type User = {
    _id: number
    name: String
    email: String
    password: String
    is_Active: Boolean
    posts: [Post]
};
  
export type UserResponse = {
    user: User
    token: String
    error: String
};