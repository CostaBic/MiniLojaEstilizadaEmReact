import styled from "styled-components";
import { colors, shadows, spacing } from "../styles/tokens";

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing[4]};
  background: linear-gradient(180deg, var(--nav-bg-top), var(--nav-bg-bottom));
  backdrop-filter: blur(6px);
  box-shadow: ${shadows.sm};
  z-index: 50;
`;

const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1650px;
`;

const Logo = styled.h1`
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${colors.text};
`;

const Actions = styled.div`
  display: flex;
  gap: ${spacing[3]};
  align-items: center;
`;

const ThemeButton = styled.button`
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  background: var(--button-bg);
  color: var(--button-text);
  cursor: pointer;
  font-weight: 500;
`;

const Cart = styled.div`
  position: relative;
  color: ${colors.text};

  span {
    margin-left: 4px;
  }
`;

export default function Navbar({ toggleTheme, cartCount }) {
  return (
    <NavbarContainer>
      <NavbarInner>
        <Logo>Lojão da cidade</Logo>
        <Actions>
          <ThemeButton onClick={toggleTheme}>Tema</ThemeButton>
          <Cart>
            🛒<span>{cartCount}</span>
          </Cart>
        </Actions>
      </NavbarInner>
    </NavbarContainer>
  );
}
