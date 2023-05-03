import { rest } from "msw";
import type { ScoopsModel } from "../model/ScoopsModel";
import { ToppingsModel } from "../model/ToppingsModel";

export const handlers = [
  // GET/ get all scoops.
  rest.get<ScoopsModel>(`*/scoops`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" }
        // { name: "Strawberry", imagePath: "/images/strawberry.png" }
      ])
    );
  }),

  // GET/ get all toppings.
  rest.get<ToppingsModel>(`*/toppings`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Cherries", imagePath: "/images/cherries.png" },
        { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
        { name: "Hot fudge", imagePath: "/images/hot-fudge.png" }
      ])
    );
  })
];
