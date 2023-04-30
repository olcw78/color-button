import SummaryForm from "./SummaryForm";
import { fireEvent, render, screen } from "@testing-library/react";

describe("init", () => {
  test("renders without crashing", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i
    });
    expect(checkbox).not.toBeChecked();

    const orderButton = screen.getByRole("button", {
      name: /Confirm Order/i
    });
    expect(orderButton).toBeDisabled();
  });
});

describe("checkbox", function () {
  test("checkbox is disabled by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i
    });
    expect(checkbox).not.toBeChecked();
  });

  test("checking a checkbox enables button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i
    });

    const orderButton = screen.getByRole("button", {
      name: /Confirm Order/i
    });

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(orderButton).toBeEnabled();
  });

  test("unchecking a checkbox disables button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i
    });

    const orderButton = screen.getByRole("button", {
      name: /Confirm Order/i
    });

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(orderButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(orderButton).toBeDisabled();
  });
});
