import { useQuery } from "@tanstack/react-query";

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return {
        id: 1,
        name: `User Name ${1}`,
        email: `u@ser.${1}com`,
      };
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      email: data.email,
    }),
    // enabled: !!userId, // Uncomment if you want to disable the query when userId is falsy
    // refetchOnWindowFocus: false, // Uncomment if you want to disable refetching on window focus
    // staleTime: 1000 * 60 * 5, // Uncomment if you want to set a stale time of 5 minutes
    // cacheTime: 1000 * 60 * 10, // Uncomment if you want to set a cache time of 10 minutes
    // retry: 1, // Uncomment if you want to retry the query once on failure
    // retryDelay: 1000, // Uncomment if you want to set a retry delay of 1 second
    // onSuccess: (data) => {
    //   console.log("User data fetched successfully:", data);
    // },
    // onError: (error) => {
    //   console.error("Error fetching user data:", error);
    // },
    // onSettled: (data, error) => {
    //   if (data) {
    //     console.log("User data settled:", data);
    //   } else {
    //     console.error("Error settling user data:", error);
    //   }
    // },
  });
};
