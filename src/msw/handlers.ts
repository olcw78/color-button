import { rest } from "msw";
import type { Scoop } from "../model/Scoop";

export const handlers = [
  // GET/ get all scoops.
  rest.get<Scoop>(`*/scoops`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" }
        // { name: "Strawberry", imagePath: "/images/strawberry.png" }
      ])
    );
  })
];
