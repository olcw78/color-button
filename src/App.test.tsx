import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelCaseWithSpaces } from "./util/string";

describe("init", () => {
  test("Initial condition", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /Change to midnight blue/i
    });
    expect(button).toBeEnabled();
    expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    expect(checkbox).not.toBeChecked();
  });
});

describe("button", function () {
  test("Button has correct initial color", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /Change to midnight blue/i
    });
    expect(button).toHaveStyle({
      backgroundColor: "MediumVioletRed"
    });
  });

  test("Button turns midnight blue when clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /Change to midnight blue/i
    });
    expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

    // click the button.
    fireEvent.click(button);

    expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
    expect(button).toHaveTextContent("Change to medium violet red");
  });

  test("Disabled button is gray and reverts to medium violet red", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /Change to midnight blue/i
    });
    expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    // click the checkbox.
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: "gray" });

    // click the checkbox again.
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  });

  test("Clicked disabled button is gray and reverts to midnight blue", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /Change to midnight blue/i
    });
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

    // click the checkbox.
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: "gray" });

    // click the checkbox again.
    fireEvent.click(checkbox);
    expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
  });
});

describe("checkbox", function () {
  test("Checkbox is unchecked initially", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    expect(checkbox).not.toBeChecked();
  });

  test("Checkbox is checked when clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /Change to midnight blue/i
    });
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    // click the checkbox.
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(checkbox).toBeChecked();
  });

  test("Checkbox is re-enabled when double clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: /Change to midnight blue/i
    });
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

    // click the checkbox.
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(checkbox).toBeChecked();

    // click the checkbox again.
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    expect(checkbox).not.toBeChecked();
  });
});

describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });

  test("works for one inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works for multiple inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
