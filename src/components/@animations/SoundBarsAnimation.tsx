import styled from 'styled-components';

const SoundBarsAnimation = styled.i`
  @keyframes gg-bar {
    10% {
      box-shadow: inset 0 -4px 0;
    }
    30% {
      box-shadow: inset 0 -10px 0;
    }
    60% {
      box-shadow: inset 0 -6px 0;
    }
    80% {
      box-shadow: inset 0 -8px 0;
    }
    to {
      box-shadow: inset 0 -2px 0;
    }
  }
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 2px;
    height: 12px;
    box-shadow: inset 0 -12px 0;
    animation: gg-bar 1.3s ease infinite alternate;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1.5));
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
  }
  &::before {
    left: -4px;
    animation-delay: -2.4s;
  }
  &::after {
    right: -4px;
    animation-delay: -3.7s;
  }
`;

export default SoundBarsAnimation;
