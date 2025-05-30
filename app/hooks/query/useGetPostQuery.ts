import { useQuery } from "@tanstack/react-query";

export const useGetPostQuery = (postId: number) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      return {
        id: postId,
        title: `Post Title ${postId}`,
        content: `This is the content of post ${postId}.`,
      };
    },
  });
};
