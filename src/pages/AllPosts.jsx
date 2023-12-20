import { useEffect, useState } from "react";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  });
  return (
    <div className="flex flex-wrap">
      {posts.map((post) => {
        return (
          <div
            className="gap-2 m-2 card w-96 bg-neutral text-neutral-content"
            key={post.id}>
            <div className="items-center text-center card-body">
              <h1>{post.title} </h1>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllPosts;
