import { Suspense } from "react";
import PostsPage from "../page";

async function GetPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
}

const PostPage = async ({ params }) => {
  const post = await GetPost(params.id);
  console.log("Current post: ", params.id);
  return (
    <div className="container mx-auto p-2  md:w-2/4">
    <h1 className="text-xl font-semibold text-slate-200 mb-2">
          Post
        </h1>
      <div className="bg-slate-200 rounded p-2">
        <h2 className="text-lg font-semibold">
          {post.id} {post.title}{" "}
        </h2>
        <p>{post.body}</p>
      </div>
      <div className="mt-3">
        <h2 className="text-slate-200">Listado de posts</h2>
        <Suspense fallback={<div className="text-slate-200">Loading...</div>}>
          <PostsPage />
        </Suspense>
      </div>
    </div>
  );
};

export default PostPage;
