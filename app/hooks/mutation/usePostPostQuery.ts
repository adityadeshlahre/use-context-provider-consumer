import { useMutation } from "@tanstack/react-query";

export const usePostPostQuery = (postId: number) => {
  return useMutation({
    mutationKey: ["post", postId],
    mutationFn: async (newContent: string) => {
      return {
        id: postId,
        title: `Updated Post Title ${postId}`,
        content: newContent,
      };
    },
    onSuccess: (data) => {
      console.log("Post updated successfully:", data);
    },
    onError: (error) => {
      console.error("Error updating post:", error);
    },
  });
};
