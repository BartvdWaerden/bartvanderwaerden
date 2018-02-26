// ui/components/Card/Title.js

import { margin } from 'polished'

import H1 from '../../elements/H1'

const Title = H1.extend`
  ${props => margin('15px', null, props.theme.smSpacing)};
`

export default Title
