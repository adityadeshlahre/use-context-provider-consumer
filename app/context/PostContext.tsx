import React, { use } from "react";
import { useGetPostQuery } from "~/hooks/query/useGetPostQuery";

type PostContextType = {
  id: number;
  title: string;
  content: string;
};

const PostContext = React.createContext<PostContextType | undefined>(undefined);

type PostProviderProps = {
  children: React.ReactNode;
  postId: number;
};

export const PostProvider: React.FC<PostProviderProps> = ({
  children,
  postId,
}: PostProviderProps) => {
  const postQuery = useGetPostQuery(postId);

  if (postQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (postQuery.isError) {
    return <div>Error loading post.</div>;
  }

  if (!postQuery.data) {
    return <div>No post found.</div>;
  }

  console.log("PostProvider", postQuery.data);

  return (
    <PostContext.Provider value={postQuery.data}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = use(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
