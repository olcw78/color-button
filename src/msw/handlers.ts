import { rest } from "msw";

const serverCfg = {
  url: "http://localhost:3000"
};

interface Scoop {
  name: Capitalize<"Chocolate" | "Vanilla">;
  imagePath: string;
}

export const handlers = [
  // GET/ get all scoops.
  rest.get<Scoop>(`${serverCfg.url}/scoops`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
        { name: "Strawberry", imagePath: "/images/strawberry.png" }
      ])
    );
  })
];
