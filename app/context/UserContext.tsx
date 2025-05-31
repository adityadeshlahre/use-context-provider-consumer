import React from "react";
import { useGetUserQuery } from "~/hooks/query/useGetUserQuery";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {
  const { data, isLoading, isError } = useGetUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user.</div>;
  }

  if (!data) {
    return <div>No user found.</div>;
  }

  return (
    <UserContext.Provider value={{ user: data, isLoading, isError }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
