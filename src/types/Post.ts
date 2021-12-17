import { User } from './User';

export type Post = {
    _id: String
    title: String
    content: String
    user: User
}