import { defineType } from "sanity";

export const commentType = defineType({
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
        {
        name: 'name',
        type: 'string',
        title: 'Name',
        },
        {
        name: 'email',
        type: 'string',
        title: 'Email',
        },
        {
        name: 'comment',
        type: 'text',
        title: 'Comment',
        },
        {
        name: 'postId',
        type: 'reference',
        to: [{ type: 'post' }], 
        title: 'Post',
        },
    ],
})