import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title,
      body,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        },
      );

      if (response.ok) {
        console.log("Post created successfully");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Create Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="body" className="block mb-1 font-medium">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
