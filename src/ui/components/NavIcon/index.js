// ui/components/NavIcon/index.js

import styled from 'styled-components'
import { position, size } from 'polished'

const NavIcon = styled.button`
  ${position('absolute', '26px', '15px', null, null)};
  ${size('30px', '60px')};
  display: block;
  z-index: 1;
  outline: 0;
  background-color: transparent;

  &:focus {
    outline: 0;
  }

  & span,
  & span::before,
  & span::after {
    ${position('absolute', null, null, null, '0')};
    ${size('4px', '100%')};
    transform: translateZ(0);
    transition: all 0.24s ease-in;
    background-color: ${props =>
      props.homepage ? props.theme.whiteColor : props.theme.primaryColor};

    @media (min-width: 64em) {
      background-color: ${props => props.theme.primaryColor};
    }
  }

  & span {
    top: 50%;
  }

  & span::before,
  & span::after {
    content: '';
  }

  & span::before {
    top: -15px;
  }

  & span::after {
    top: 15px;
    width: 45px;
  }

  &.is-open {
    & span,
    & span::before {
      width: 30px;
    }

    & span {
      transform: rotate(-45deg);
    }

    & span::before {
      top: 0;
      transform: rotate(90deg);
    }

    & span::after {
      width: 0;
      transform: rotate(45deg);
      opacity: 0;
    }

    & span,
    & span::before,
    & span::after {
      background-color: ${props => props.theme.primaryColor};
    }
  }
`

export default NavIcon
