import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Initial condition", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();
});

test("Button has correct initial color", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  expect(button).toHaveStyle({
    backgroundColor: "red"
  });
});

test("Button has correct initial text", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  expect(button.textContent).toBe("Change to blue");
});

test("Button turns blue when clicked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // click the button.
  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent("Change to red");
});

test("Checkbox is unchecked initially", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();
});

test("Checkbox is checked when clicked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click the checkbox.
  fireEvent.click(checkbox);
  expect(button).not.toBeEnabled();
  expect(checkbox).toBeChecked();
});

test("Checkbox is re-enabled when double clicked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click the checkbox.
  fireEvent.click(checkbox);
  expect(button).not.toBeEnabled();
  expect(checkbox).toBeChecked();

  // click the checkbox again.
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test("Disabled button is gray and reverts to red", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  expect(button).toHaveStyle({ backgroundColor: "red" });

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click the checkbox.
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // click the checkbox again.
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("Clicked disabled button is gray and reverts to blue", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  // click the checkbox.
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // click the checkbox again.
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
