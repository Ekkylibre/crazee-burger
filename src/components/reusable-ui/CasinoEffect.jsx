import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <CasinoEffectStyled>
      <TransitionGroup component={CasinoEffectStyled} className="transition-group">
        <CSSTransition
          appear={true}
          classNames={"count-animated"}
          timeout={5000}
          key={count}
        >
          <span className={className}>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
  )
}

const CasinoEffectStyled = styled.span`
  border: 1px solid red;
  
  .count-animated-enter {
    background: green;
  }

  .count-animated-enter-active {
  background: blue;
  transition: 2s;
  }

  .count-animated-enter-done {
    background: pink;
  }
`;