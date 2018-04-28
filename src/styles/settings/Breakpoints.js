// styles/settings/Breakpoints.js

const size = {
  small: '20em',
  compact: '30em',
  medium: '48em',
  large: '64em',
  wide: '80em',
  huge: '105em',
}

const breakpoint = {
  small: `(min-width: ${size.small})`,
  compact: `(min-width: ${size.compact})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
  wide: `(min-width: ${size.wide})`,
  huge: `(min-width: ${size.huge})`,
}

export default breakpoint
