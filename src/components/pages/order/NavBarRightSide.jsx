import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavBarRightSide({ username }) {
    return (
        <NavBarRightSideStyled>
            {/* <div className="admin-button">Admin Button</div> */}
            <Profile />
        </NavBarRightSideStyled>
    )
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */
  .profile {
    background: yellow;
  }
`;