'use client';

import { useState } from "react";

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {
    if (!title || !content) return;

    setLoading
    try {
       
        const response = await fetch("/api/posts", {
          method: "POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify({ title, content }),
        });

        console.log(response)
        setContent("");
        setTitle("");

    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Post</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Content Textarea */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post here..."
          className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
          Cancel
        </button>
         <button
          className={`px-4 py-2 rounded text-white ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={handleCreatePost}
          disabled={loading} // disable button while loading
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              <span>Creating...</span>
            </span>
          ) : (
            "Create"
          )}
        </button>
      </div>
    </div>
  )
}

export default CreatePost