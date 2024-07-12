import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBarRightSide({ username }) {
    return (
        <NavBarRightSideStyled>
            right
            <h1>Bonjour {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </NavBarRightSideStyled>
    )
}

const NavBarRightSideStyled = styled.div`
  background: purple;
`;