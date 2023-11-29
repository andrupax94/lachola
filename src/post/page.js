import Link from "next/link";
import ItemPost from "@/app/components/ItemPost";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });
  return posts;
}

async function PostsPage() {
  const posts = await getPosts();
  console.log("posts", posts);

  return (
    <>
    <div className="container p-2 mx-auto  md:w-3/4 space-y-2">   
      <div className="text-xl font-semibold text-slate-200">Posts</div>
      {posts ? (
        posts.map((post) => (
          <div key={post.id}>
            <Link href={`/post/${post.id}`}>
              <ItemPost post={post} />
            </Link>
          </div>
        ))
      ) : (
        <>No hay datos</>
      )}
    </div>
    </>
  );
}

export default PostsPage;
