import SummaryForm from "./SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("checking a checkbox enables button", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i
    });

    const orderButton = screen.getByRole("button", {
      name: /Confirm Order/i
    });

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(orderButton).toBeEnabled();
  });

  test("unchecking a checkbox disables button", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /I agree to Terms and Conditions/i
    });

    const orderButton = screen.getByRole("button", {
      name: /Confirm Order/i
    });

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(orderButton).toBeEnabled();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(orderButton).toBeDisabled();
  });
});

describe("pop over", () => {
  test("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popOver = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popOver).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(popOver).not.toBeInTheDocument();
  });
});
