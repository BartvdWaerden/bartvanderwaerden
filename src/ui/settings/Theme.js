// ui/settings/Theme.js

const colors = {
  primary: 'var(--primaryColor)',
  secondary: 'var(--secondaryColor)',
  gray: 'var(--grayColor)',
  grayLight: 'var(--grayLightColor)',
  grayLightest: 'var(--grayLightestColor)',
  white: 'var(--whiteColor)',
  black: 'var(--blackColor)',
}

const fonts = {
  primary: 'var(--primaryFont)',
  secondary: 'var(--secondaryFont)',
}

const font = {
  pico: 'var(--picoFontSize)',
  base: 'var(--baseFontSize)',
  delta: 'var(--deltaFontSize)',
  gamma: 'var(--gammaFontSize)',
  beta: 'var(--betaFontSize)',
  alpha: 'var(--alphaFontSize)',
  mega: 'var(--megaFontSize)',
}

const fontWeight = {
  regular: 'var(--regularFontWeight)',
  bold: 'var(--boldFontWeight)',
}

const letterSpacing = {
  primary: 'var(--primaryLetterSpacing)',
}

const spacing = {
  xs: 'var(--xsSpacing)',
  sm: 'var(--smSpacing)',
  md: 'var(--mdSpacing)',
  lg: 'var(--lgSpacing)',
  xl: 'var(--xlSpacing)',
}

const width = {
  contentWidth: 'var(--contentWidth)',
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
