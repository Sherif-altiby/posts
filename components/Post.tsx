'use client';

type PostType = {
  id: number
  title: string
  content?: string
}

const Post = ( { posts }: { posts: PostType } ) => {

  const deletePost = async (id: number) => {
    try {
      const response = await fetch("/api/posts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      window.location.reload(); // Refresh the page to show updated posts
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className=" p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Post Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-800">{posts.title}</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
            Edit
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            onClick={() => deletePost(posts.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Post Content */}
      <p className="mt-4 text-gray-700">
        {posts.content ? posts.content : "No content available."}
      </p>
    </div>
  )
}

export default Post