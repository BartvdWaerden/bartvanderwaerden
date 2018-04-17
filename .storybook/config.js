import { configure, addDecorator } from '@storybook/react';
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/ui/settings/Theme'

const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
