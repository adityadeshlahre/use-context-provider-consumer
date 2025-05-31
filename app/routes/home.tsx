import type { Route } from "./+types/home";
import { PostCard, PostCardPost } from "~/components/PostCard";
import { useParams } from "react-router";
import ThemeToggle from "~/components/ThemeToggle";
import NotificationInit from "~/components/NotificationInit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { id } = useParams() as { id: string };

  if (!id) return <div>Invalid post ID</div>;
  if (isNaN(Number(id))) return <div>Post ID must be a number</div>;
  if (Number(id) <= 0) return <div>Post ID must be greater than zero</div>;

  return (
    <>
      <div>
        <PostCard id={parseInt(id)} />
      </div>
      <div>
        <PostCardPost id={parseInt(id)} />
      </div>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <NotificationInit />
      </div>
    </>
  );
}
