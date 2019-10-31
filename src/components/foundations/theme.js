import deepFreeze from 'deep-freeze'
import { lighten, darken } from 'polished'

const buildColorPalette = main => ({
  500: darken(0.35, main),
  400: darken(0.25, main),
  300: main,
  200: lighten(0.2, main),
  100: lighten(0.25, main),
  75: lighten(0.3, main),
  50: lighten(0.35, main),
  25: lighten(0.4, main),
})

// colors
const colors = {
  primary: buildColorPalette('#0E7373'),
  primaryGradient: 'linear-gradient(90deg, #0e7373, #0e6973)',
  red: buildColorPalette('#FF5630'),
  yellow: buildColorPalette('#FFAB00'),
  green: buildColorPalette('#36B37E'),
  blue: buildColorPalette('#0065FF'),
  purple: buildColorPalette('#6554C0'),
  neutral: buildColorPalette('#5E6C84'),
  white: '#fff',
  black: '#333',
}

const media = {
  /*
  Semantic UI Breakpoints
   @mobileBreakpoint            : 320px;
   @tabletBreakpoint            : 768px;
   @computerBreakpoint          : 992px;
  */
  tablet: '991px',
  mobile: '767px',
}

const typography = {
  types: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    display: '"Montserrat", sans-serif',
    mono:
      '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace',
  },
  size: {
    xs: '0.78405rem',
    sm: '0.8rem',
    md: '0.85028rem',
    rg: '1rem',
    lg: '1.38316rem',
    xl: '1.62671rem',
    xxl: '2.25rem',
    display: '3.8rem',
  },
}

const shape = {
  radius: 6,
}

const SPACE_UNIT = 8
const spacing = (...args) => {
  const unit = v => v * SPACE_UNIT
  switch (args.length) {
    case 1:
      return `${unit(args[0])}px`
    case 2:
      return [0, 1].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    case 3:
      return [0, 1, 2].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    case 4:
      return [0, 1, 2, 3].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    default:
      return 'auto auto'
  }
}

const theme = {
  colors,
  media,
  typography,
  shape,
  spacing,
}

deepFreeze(theme)

export default theme
