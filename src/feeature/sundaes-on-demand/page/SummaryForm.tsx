import { useState } from "react";
import styled from "@emotion/styled";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [
    isMouseHoverOnTermsAndConditionsLabel,
    setIsMouseHoverOnTermsAndConditions
  ] = useState(false);

  return (
    <Form name="summary-form">
      <FormPosition>
        <FormCheckbox
          type="checkbox"
          id="summary-form-checkbox"
          defaultChecked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />

        <label
          htmlFor="summary-form-checkbox"
          onMouseOver={() => setIsMouseHoverOnTermsAndConditions(true)}
          onMouseLeave={() => setIsMouseHoverOnTermsAndConditions(false)}
        >
          I agree to Terms and Conditions
        </label>

        {/* Hover Box */}
        {isMouseHoverOnTermsAndConditionsLabel && (
          <HoverBox>
            <span>
              no ice cream will <br />
              actually be delivered
            </span>
          </HoverBox>
        )}
      </FormPosition>

      <FormSubmitButton type="submit" disabled={!isChecked} name="summary-form">
        <span>Confirm order</span>
      </FormSubmitButton>
    </Form>
  );
};

export default SummaryForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: darkolivegreen;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const FormPosition = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const FormCheckbox = styled.input`
  margin-right: 16px;
`;

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

  span {
    color: black;
    font-size: 16px;
    font-weight: 600;
  }
`;

const FormSubmitButton = styled.button`
  padding: 5px 9px;
  border-radius: 4px;
  border: none;

  span {
    color: black;
    font-size: 16px;
  }
`;
