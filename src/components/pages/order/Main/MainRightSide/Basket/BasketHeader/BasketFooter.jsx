import styled from "styled-components"
import { theme } from "../../../../../../../theme"

export default function BasketFooter() {
  return (
    <HeaderStyled>
      <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
      </FooterStyled>
    </HeaderStyled>
  )
}

const FooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P2};
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`

const HeaderStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`;
