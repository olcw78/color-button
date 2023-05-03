import { render, screen } from "@testing-library/react";
import Options from "./Options";

describe("scoop images", () => {
  test("displays image for each scoop options", async () => {
    render(<Options optionType="scoops" />);

    // get image.
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages.length).toBe(2);

    // confirm alt text of images.
    const altText = scoopImages.map((img) => img.getAttribute("alt"));
    if (altText.length !== 2) {
      throw new Error("Alt test length is not equal to 2");
    }
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
  });
});
