import React from 'react'
import { storiesOf } from '@storybook/react'

import Tag from '../src/ui/components/Tag'

storiesOf('Tag', module)
  .add('default', () => <Tag>Default tag</Tag>)
  .add('secondary', () => <Tag>Secondary tag</Tag>)
