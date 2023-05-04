import { rest } from "msw";
import { server } from "../../../msw/server";
import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "./OrderEntry";

describe("error on purpose", () => {
  test("handles error for scoops and toppings routes", async () => {
    server.resetHandlers(
      rest.get("*/scoops", (req, res, ctx) => res(ctx.status(500))),
      rest.get("*/toppings", (req, res, ctx) => res(ctx.status(500)))
    );

    render(<OrderEntry />);

    await waitFor(
      async () => {
        // const alerts = await screen.findAllByRole("alert");
        const alerts = await screen.findAllByText(
          /an unexpected error occurred. please try again later/i
        );
        expect(alerts.length).toBe(2);
      },
      {
        timeout: 5000
      }
    );
  });

  test("test111", () => {});
});
