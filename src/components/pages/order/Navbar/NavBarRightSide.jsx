import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyled>
      <ToggleButton
      labelIfUnchecked="ACTIVER LE MODE ADMAIN"
      labelIfChecked="DÉSACTIVER LE MODE ADMAIN"/>
      <Profile username={username} />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .profile {
    background: yellow;
  }
`;