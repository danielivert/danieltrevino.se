import Typography from 'typography'
const fairyGateTheme = require('typography-theme-fairy-gates')

fairyGateTheme.baseFontSize = '22px'
fairyGateTheme.headerFontFamily = ['Montserrat', 'sans-serif']
fairyGateTheme.bodyFontFamily = ['Roboto', 'sans-serif']
fairyGateTheme.googleFonts = [
  {
    name: 'Montserrat',
    styles: ['300', '400', '500', '600', '700']
  },
  {
    name: 'Roboto',
    styles: ['400', '800']
  }
]

const typography = new Typography(fairyGateTheme)

export default typography
