import { PrismaPg } from '@prisma/adapter-pg';
import {PrismaClient, Prisma } from '../app/generated/prisma/client';
import 'dotenv/config';

const adapter = new PrismaPg({ 
    connectionString: process.env.DATABASE_URL 
})

const prisma = new PrismaClient({
    adapter
})

const posts: Prisma.PostCreateInput[] = [
    {
        title: 'First Post',
        content: 'This is the content of the first post.'
    },{
        title: 'Second Post',
        content: 'This is the content of the second post.'
    },
    {
        title: 'Third Post',
        content: 'This is the content of the third post.'
    }
]


export async function main() {
    for (const post of posts) {
        await prisma.post.create({
            data: post
        })
    }
}


main()