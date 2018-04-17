import React from 'react'
import Link from 'gatsby-link'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tag from '../src/ui/components/Tag'

storiesOf('Tag', module)
  .add('default', () => <Tag>Default tag</Tag>)
  .add('secondary', () => <Tag>Secondary tag</Tag>)
