import { prisma } from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();

   if (!title || !content) {
      return new Response("Title and content are required", { status: 400 });
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return Response.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response("Failed to create post", { status: 500 });
  }
}


export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response("ID is required", { status: 400 });
    }

    await prisma.post.delete({
      where: { id },
    });

    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return new Response("Failed to delete post", { status: 500 });
  }
}


export async function PUT(request: Request) {
  try {
    const { id, title, content } = await request.json();

    if (!id) {
      return new Response("ID is required", { status: 400 });
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
      },
    });

    return Response.json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    return new Response("Failed to update post", { status: 500 });
  }
}