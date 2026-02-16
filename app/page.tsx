import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">

           <h1 className="text-2xl text-center mt-4" > Create and read posts </h1> 

           <div className="flex items-center justify-center gap-2 mt-5" >
                <Link href="/createposts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create Posts
                </Link>
                <Link href="/posts" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Posts
                </Link>
           </div>
       
      </main>
    </div>
  );
}
