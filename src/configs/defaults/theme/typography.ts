import { toRem } from 'utils/theme'

import '@fontsource/inter/latin.css'
import '@fontsource/playfair-display/latin.css'
import '@fontsource/playfair-display/latin-italic.css'
import { type TypographyOptions } from '@mui/material/styles/createTypography'

// Bruno Fine Properties — Playfair Display (serif) for headings, Inter (sans) for body.
// Playfair gives the luxury real-estate feel; Inter keeps UI readable.
const HEADING_FONT = ['"Playfair Display"', 'Georgia', 'serif'].join(',')
const BODY_FONT = ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(',')

const typography: TypographyOptions = {
  htmlFontSize: 16, // HTML base font size in pixels
  fontSize: 16, // 16px
  fontFamily: BODY_FONT,

  h1: {
    fontFamily: HEADING_FONT,
    fontWeight: 600,
    fontSize: toRem(56),
    lineHeight: toRem(68),
    letterSpacing: '-0.01em'
  },
  h2: {
    fontFamily: HEADING_FONT,
    fontWeight: 600,
    fontSize: toRem(36),
    lineHeight: toRem(44),
    letterSpacing: '-0.005em'
  },
  h3: {
    fontFamily: HEADING_FONT,
    fontWeight: 600,
    fontSize: toRem(28),
    lineHeight: toRem(36)
  },
  h4: {
    fontFamily: HEADING_FONT,
    fontWeight: 600,
    fontSize: toRem(22),
    lineHeight: toRem(30)
  },
  h5: {
    fontFamily: BODY_FONT,
    fontWeight: 600,
    fontSize: toRem(18),
    lineHeight: toRem(24)
  },
  h6: {
    fontFamily: BODY_FONT,
    fontWeight: 600,
    fontSize: toRem(16),
    lineHeight: toRem(24),
    letterSpacing: '0.04em',
    textTransform: 'uppercase'
  },

  subtitle2: {},

  // NOTE: `body1` is the default text size in Material UI
  body1: {
    fontWeight: 400,
    fontSize: toRem(16),
    lineHeight: toRem(24)
  },

  body2: {
    fontSize: toRem(14),
    lineHeight: toRem(20)
  },

  caption: {
    fontSize: toRem(10),
    lineHeight: toRem(16)
  },

  button: {
    lineHeight: 1.75,
    fontSize: toRem(16),
    fontWeight: 'medium',
    textTransform: 'none'
  }
}

export default typography
