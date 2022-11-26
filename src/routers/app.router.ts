import { usersRouter } from "./users.router";
import { router } from "../utils/trpc.utils";

export const appRouter = router({
  usersRouter,
});

export type AppRouter = typeof appRouter;
