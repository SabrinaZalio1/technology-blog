import styled, { css } from "styled-components";

const buttonVariants = {
  primary: {
    default: { background: "#D8F34E", text: "#240F35", border: "1px solid #D8F34E" },
    hover: { background: "#000000", text: "#FFFFFF", border: "1px solid #000000" },
    focus: { background: "#D8F34E", text: "#240F35", border: "1px solid #000000" },
    active: { background: "##240F35", text: "#fff", border: "1px solid #240F35" },
    disabled: { background: "##FFFFFF", text: "##8C8C8C", border: "1px solid #cccccc" },
  },
  secondary: {
    default: { background: "#FFFFFF", text: "#240F35", border: "1px solid #D8F34E" },
    hover: { background: "#D8F34E", text: "#240F35", border: "1px solid #D8F34E" },
    focus: { background: "#FFFFFF", text: "#240F35", border: "1px solid #D8F34E" },
    active: { background: "#D8F34E", text: "#240F35", border: "1px solid #D8F34E" },
    disabled: { background: "#FFFFFF", text: "#8C8C8C", border: "1px solid #8C8C8C" },
  },
  black: {
    default: { background: "#000", text: "#fff", border: "1px solid #000" },
    hover: { background: "#D8F34E", text: "#000", border: "1px solid #000" },
    focus: { background: "#D8F34E", text: "#000", border: "1px solid #000" },
    active: { background: "#D8F34E ", text: "#000", border: "1px solid #000" },
    disabled: { background: "#cccccc", text: "#666", border: "1px solid #cccccc" },
  },
  green: {
    default: { background: "#D8F34E", text: "#000", border: "1px solid #000" },
    hover: { background: "#000", text: "#fff", border: "1px solid transparent" },
    focus: { background: "#000", text: "#fff", border: "1px solid #000" },
    active: { background: "#000", text: "#fff", border: "1px solid #000" },
    disabled: { background: "#cccccc", text: "#666", border: "1px solid #cccccc" },
  },
};

interface ButtonProps {
  variant: keyof typeof buttonVariants;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ variant, disabled }) => {
    const state = disabled ? "disabled" : "default";
    const styles = buttonVariants[variant][state];

    return css`
      background-color: ${styles.background};
      color: ${styles.text};
      border: ${styles.border};
      padding: 10px 20px;
      font-size: 16px;
      cursor: ${disabled ? "not-allowed" : "pointer"};
      transition: background 0.3s, border 0.3s;
      font-weight: 500;
      
      &:hover {
        ${!disabled && css`
          background-color: ${buttonVariants[variant].hover.background};
          border: ${buttonVariants[variant].hover.border};
          color: ${buttonVariants[variant].hover.text};
        `}
      }

      &:focus {
        ${!disabled && css`
          background-color: ${buttonVariants[variant].focus.background};
          border: ${buttonVariants[variant].focus.border};
          color: ${buttonVariants[variant].hover.text};
          outline: none;
        `}
      }

      &:active {
        ${!disabled && css`
          background-color: ${buttonVariants[variant].active.background};
          border: ${buttonVariants[variant].active.border};
          color: ${buttonVariants[variant].hover.text};
        `}
      }
    `;
  }}
`;
