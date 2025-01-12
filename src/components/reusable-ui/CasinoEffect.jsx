import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <CasinoEffectStyled>
      <TransitionGroup component={CasinoEffectStyled} className="transition-group">
        <CSSTransition
          appear={true}
          classNames={"count-animated"}
          timeout={300}
          key={count}
        >
          <span className={className}>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
  )
}

const CasinoEffectStyled = styled.span`
  position: relative;
  overflow-y: hidden;

  span {
    display: inline-block;
  }

  /*MOUNTING*/
  .count-animated-enter {
    transform: translateY(100%);
  }

  .count-animated-enter-active {
    transition: 300ms;
    transform: translateY(0%);
  }

  .count-animated-enter-done {
    transition: 300ms;
  }

  /*UNMOUNTING*/
  .count-animated-exit {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(0%);
  }

  .count-animated-exit-active {
    transition: 300ms;
    transform: translateY(-100%);
  }
`;
