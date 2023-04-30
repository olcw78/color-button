import { useState } from "react";
import { css } from "@emotion/react";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form
      name="summary-form"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: green;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      `}
    >
      <div>
        <input
          type="checkbox"
          id="summary-form-checkbox"
          defaultChecked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          css={css`
            margin-right: 16px;
          `}
        />
        <label htmlFor="summary-form-checkbox">
          I agree to Terms and Conditions
        </label>
      </div>

      <button type="submit" disabled={!isChecked} name="summary-form">
        Confirm order
      </button>
    </form>
  );
};

export default SummaryForm;
