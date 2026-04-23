import { darken, lighten } from '@mui/material'

// Bruno Fine Properties — navy + gold brand palette
// Navy = authority, trust. Gold = luxury, CTA.

export const white = '#FFFFFF'
export const light = '#7A8899'
export const medium = '#3A4A5C'
export const dark = '#1A2A3A'
export const black = '#0A1628'

export const background = '#FAFAFA'

// navy — primary brand color (app bar, nav, headings on light bg)
export const primary = '#0A1628'
// gold — secondary / CTA accent (buttons on navy, highlights, links on dark bg)
export const secondary = '#C9A84C'
// markers — gold so prices pop against map tiles
export const marker = secondary
export const soldMarker = darken(marker, 0.2)
export const rentMarker = marker

export const hint = light
export const disabled = light
export const divider = '#E6E8EC'

// alert / toast / snackbar colors

export const info = '#2196F3'
export const error = '#D32F2F'
export const success = '#2E7D32'
export const warning = '#C9A84C'

// Chart colors

export const chartColors = [secondary, lighten(primary, 0.4), success]
export const inventoryColors = [success, warning, error]
