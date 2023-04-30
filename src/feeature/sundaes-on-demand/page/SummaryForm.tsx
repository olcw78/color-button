import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [
    isMouseHoverOnTermsAndConditionsLabel,
    setIsMouseHoverOnTermsAndConditions
  ] = useState(false);

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
      <div
        css={css`
          position: relative;
        `}
      >
        <input
          type="checkbox"
          id="summary-form-checkbox"
          defaultChecked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          css={css`
            margin-right: 16px;
          `}
        />
        <label
          htmlFor="summary-form-checkbox"
          onMouseOver={() => setIsMouseHoverOnTermsAndConditions(true)}
          onMouseLeave={() => setIsMouseHoverOnTermsAndConditions(false)}
        >
          I agree to Terms and Conditions
        </label>

        {isMouseHoverOnTermsAndConditionsLabel && (
          <HoverBox>
            <HoverContent>
              no ice cream will <br />
              actually be delivered
            </HoverContent>
          </HoverBox>
        )}
      </div>

      <button type="submit" disabled={!isChecked} name="summary-form">
        Confirm order
      </button>
    </form>
  );
};

export default SummaryForm;

const HoverBox = styled.div`
  position: absolute;
  top: -80%;
  right: -80%;
  border-radius: 4px;
  background-color: #fff;
  padding: 5px 5px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const HoverContent = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 600;
`;
