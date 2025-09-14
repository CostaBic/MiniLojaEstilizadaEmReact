import styled, { css } from "styled-components";
import { colors, shadows, transition } from "../styles/tokens";

const StyledButton = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font: inherit;
  transition: transform ${transition.base}, box-shadow ${transition.base}, opacity ${transition.base};

  /* Desabilitado */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* Variantes */
  ${({ variant }) =>
    variant === "solid" &&
    css`
      background: ${colors.primary};
      color: ${colors.buttonTextOnPrimary};
      box-shadow: ${shadows.sm};

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${shadows.md};
      }
    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      background: transparent;
      color: ${colors.text};
      border: 1px solid rgba(11, 26, 43, 0.08);

      /* dark mode */
      .dark & {
        border: 1px solid rgba(255, 255, 255, 0.06);
      }
    `}

  ${({ variant }) =>
    variant === "ghost" &&
    css`
      background: transparent;
      color: ${colors.primary};
    `}
`;

export default function Button({ label, onClick, variant = "solid", ...props }) {
  return (
    <StyledButton onClick={onClick} variant={variant} {...props}>
      {label}
    </StyledButton>
  );
}
