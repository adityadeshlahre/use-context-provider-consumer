import { useRef } from "react";
import { PostProvider, usePostContext } from "~/context/PostContext";
import { usePostPostQuery } from "~/hooks/mutation/usePostPostQuery";

type PostCardProps = {
  id: number;
};

export function PostCard({ id }: PostCardProps) {
  return (
    <>
      <PostProvider postId={id}>
        <PostCardHeader />
        <PostCardFooter />
      </PostProvider>
    </>
  );
}

function PostCardHeader() {
  const post = usePostContext();

  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  );
}

function PostCardFooter() {
  const post = usePostContext();

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}

export function PostCardPost({ id }: PostCardProps) {
  const mutation = usePostPostQuery(id);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleUpdate = () => {
    const newContent = inputRef.current?.value ?? "";
    mutation.mutate(newContent);
  };

  return (
    <div>
      <input
        ref={inputRef}
        // value={inputRef}
        type="text"
        placeholder="Post content"
      />
      <button onClick={handleUpdate}>Post Send</button>
    </div>
  );
}
