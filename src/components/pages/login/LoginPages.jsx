import styled from "styled-components";
import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo";

export default function LoginPages() {
  // affichage
  return (<LoginPagesStyled>
    <Logo />
    <LoginForm />
  </LoginPagesStyled>
  )
}

const LoginPagesStyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;