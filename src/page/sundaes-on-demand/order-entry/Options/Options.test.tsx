import { render, screen } from "@testing-library/react";
import Options from "./Options";

describe("scoops", () => {
  test("displays image for each scoop options", async () => {
    render(<Options optionType="scoops" />);

    // get images.
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages.length).toBe(2);

    // confirm alt text of images.
    const altText = scoopImages.map((img) => img.getAttribute("alt"));
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
});

describe("toppings", () => {
  test("displays image for each topping options", async () => {
    render(<Options optionType="toppings" />);

    // get images.
    const toppingImages = await screen.findAllByRole("img", {
      name: /topping$/i
    });
    expect(toppingImages.length).toBe(3);

    // confirm alt text of images.
    const altText = toppingImages.map((img) => img.getAttribute("alt"));
    expect(altText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping"
    ]);
  });
});
