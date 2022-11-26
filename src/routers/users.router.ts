import { router, procedure } from "../utils/trpc.utils";

export const usersRouter = router({
  getAll: procedure.query(() => {
    return [
      { name: "Ibrahim", age: 21 },
      { name: "Khaled", age: 20 },
      { name: "Malek", age: 22 },
    ];
  }),
});
