// styles/components/Photo/index.js

import styled from 'styled-components'
import { position, size } from 'polished'
import breakpoint from '../../settings/Breakpoints'

const Photo = styled.div`
  position: relative;
  z-index: -1;
  grid-area: 2 / 1 / 3 / -1;

  @media ${breakpoint.large} {
    grid-row-end: -1;
  }

  img {
    ${size('100%')};
    position: absolute;
    object-fit: cover;

    @media ${breakpoint.large} {
      width: 50%;
    }
  }

  &::after {
    ${size('100%', '50%')};
    content: '';
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, white);

    @media ${breakpoint.large} {
      ${position('absolute', null, '50%', null, null)};
    }
  }
`

export default Photo
