export const simpleTheme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Poppins, sans-serif",
    monospace: "Menlo, monospace"
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700
  },
  letterSpacings: {
    heading: "-0.05em",
    caps: "0.1em"
  },
  colors: {
    black: "#000e1a",
    blue: "#007ce0",
    navy: "#004175",
    lightText: "#666",
    inherit: "inherit",
    background: "lightgrey"
  },
  fontSizes: [8, 10, 12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    a: {
      color: "darkblue",
      textDecoration: "none"
    }
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
      fontSize: [5, 6, 7]
    },
    date: {
      fontFamily: "heading",
      fontWeight: "body",
      lineHeight: "body",
      letterSpacing: "heading",
      color: "lightText",
      fontSize: [1, 2, 3]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "caps"
    }
  },
  images: {
    avatar: {
      large: {
        width: 120,
        height: 120,
        borderRadius: 9999
      },
      small: {
        width: 90,
        height: 90,
        borderRadius: 9999
      }
    }
  }
};

export default simpleTheme;
