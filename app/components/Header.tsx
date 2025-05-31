import { useNavigate } from "react-router";
import { useUserContext } from "~/context/UserContext";

export default function Header() {
  const user = useUserContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>{user.user?.id}</div>
        <div>{user.user?.email}</div>
        <div>{user.user?.name}</div>
        <button
          className="border-2 border-b-lime-900"
          onClick={() => {
            navigate("/1");
          }}
        >
          CLick me
        </button>
      </div>
    </>
  );
}
