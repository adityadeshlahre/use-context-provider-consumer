import { useUserContext } from "~/context/UserContext";

export default function Header() {
  const user = useUserContext();

  return (
    <>
      <div>{user.user?.id}</div>
      <div>{user.user?.email}</div>
      <div>{user.user?.name}</div>
    </>
  );
}
