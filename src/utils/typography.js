import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a": {
      boxShadow: `none`,
    },
    "body":{
      color: `hsla(0,0%,100%,0.9)`,
      backgroundColor: `hsla(0,0%,0%,0.9)`,
    },
    "mark,ins": {
      color: `hsla(0,0%,100%,0.9)`,
    },
    "blockquote": {
      color: `hsla(0,0%,100%,0.65)`,
    },
    "blockquote cite": {
      color: `hsla(0,0%,100%,0.95)`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
