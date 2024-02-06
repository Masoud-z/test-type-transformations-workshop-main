import { Equal, Expect } from "../helpers/type-utils";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutesType = `/${string}:${string}`;
type DynamicRoutes = Extract<Routes, DynamicRoutesType>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
