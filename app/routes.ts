import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [route("/:id", "routes/home.tsx")] satisfies RouteConfig;
