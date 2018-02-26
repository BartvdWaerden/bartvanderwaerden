import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from './components/Sidebar'
import A from './elements/A'
import Outgoing from './elements/Outgoing'

const Intro = ({ text }) => (
  <Sidebar>
    <Sidebar.Title>
      UX &amp;<br />Front<br />end
    </Sidebar.Title>
    <Sidebar.Footer>
      <Sidebar.Text>{text}</Sidebar.Text>
      <A to="/about" modifiers={['arrow']}>
        More about me
      </A>
      <Sidebar.Links>
        <Outgoing target="_blank" href="https://twitter.com/BartvdWaerden">
          Twitter
        </Outgoing>
        <Outgoing target="_blank" href="https://github.com/BartvdWaerden">
          Github
        </Outgoing>
      </Sidebar.Links>
    </Sidebar.Footer>
  </Sidebar>
)

Intro.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Intro
