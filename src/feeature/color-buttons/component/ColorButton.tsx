import styled from "@emotion/styled";

interface ButtonProps extends Pick<HTMLButtonElement, "disabled"> {
  isClicked: boolean;
}

const ColorButton = styled.button<ButtonProps>`
  background-color: ${(p) => decideBackgroundColor(p)};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};

  width: 150px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  margin-bottom: 20px;

  span {
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
`;
export default ColorButton;

const decideBackgroundColor = (
  p: Pick<ButtonProps, "isClicked" | "disabled">
) => {
  if (p.disabled) return "gray";
  if (p.isClicked) return "MidnightBlue";
  return "MediumVioletRed";
};
