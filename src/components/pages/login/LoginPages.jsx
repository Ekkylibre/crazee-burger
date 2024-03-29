import styled from "styled-components";
import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo";

export default function LoginPages() {
  // affichage
  return (
  <LoginPageStyled>
    <Logo />
    <LoginForm />
  </LoginPageStyled>
  )
}

const LoginPageStyled = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background: url("/images/burger-and-fries-background.jpg") rgba(0,0,0,0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;