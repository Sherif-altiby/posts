import Post from "@/components/Post"
import { prisma } from '../../lib/prisma'

export default async function page ()  {

  const posts = await prisma.post.findMany()

  

  return (
   <>
       <h1 className="mt-3 text-center text-2xl mb-3"> Your Posts </h1>
      <div className="grid md:grid-cols-2 p-2 gap-2" >
        {posts.map((post: any) => (
          <Post key={post.id} posts={post} />
        ))}
      </div>
   </>
  )
}

