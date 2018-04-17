// ui/settings/Theme.js

const colors = {
  primary: `#5141d3`,
  secondary: `#2afb9b`,
  gray: `#333333`,
  grayLight: `#7f7f7f`,
  grayLightest: `#f2f2f2;`,
  white: `#ffffff;`,
  black: `#000000`,
}

const fonts = {
  primary: `"PT Serif", serif`,
  secondary: `"PT Sans", sans-serif`,
}

const font = {
  pico: `.75rem/2 ${fonts.secondary}`,
  base: `1rem/1.5 ${fonts.primary}`,
  delta: `1.25rem/1.5 ${fonts.primary}`,
  gamma: `1.25rem/1.2 ${fonts.primary}`,
  beta: `1.5rem/1 ${fonts.primary}`,
  alpha: `2rem/1.5 ${fonts.primary}`,
  mega: `4.5rem/.85 ${fonts.primary}`,
}

const fontWeight = {
  regular: `400`,
  bold: `700`,
}

const letterSpacing = {
  primary: `.25rem`,
}

const spacing = {
  xs: `5px`,
  sm: `30px`,
  md: `60px`,
  lg: `90px`,
  xl: `120px`,
}

const width = {
  contentWidth: `1000px`,
}

export default {
  primaryColor: colors.primary,
  secondaryColor: colors.secondary,
  grayColor: colors.gray,
  grayLightColor: colors.grayLight,
  grayLightestColor: colors.grayLightest,
  whiteColor: colors.white,
  blackColor: colors.black,
  primaryFont: fonts.primary,
  secondaryFont: fonts.secondary,
  picoFontSize: font.pico,
  baseFontSize: font.base,
  deltaFontSize: font.delta,
  gammaFontSize: font.gamma,
  betaFontSize: font.beta,
  alphaFontSize: font.alpha,
  megaFontSize: font.mega,
  regularFontWeight: fontWeight.regular,
  boldFontWeight: fontWeight.bold,
  primaryLetterSpacing: letterSpacing.primary,
  xsSpacing: spacing.xs,
  smSpacing: spacing.sm,
  mdSpacing: spacing.md,
  lgSpacing: spacing.lg,
  xlSpacing: spacing.xl,
  contentWidth: width.contentWidth,
}
