import Color from "color";

// Colors
const primary = Color("#173f7a");
const accent = Color("#eb6c23");
const neutral = Color("#929292");

export const theme = {
  colors: {
    // Primary
    primary100: primary.lighten(1.5).hex(),
    primary200: primary.lighten(1.2).hex(),
    primary300: primary.lighten(0.9).hex(),
    primary400: primary.lighten(0.3).hex(),
    primary500: primary.lighten(0).hex(),
    primary600: primary.lighten(-0.2).hex(),
    primary700: primary.lighten(-0.4).hex(),
    primary800: primary.lighten(-0.6).hex(),
    primary900: primary.lighten(-0.8).hex(),
    // Accent
    accent100: accent.lighten(0.8).hex(),
    accent200: accent.lighten(0.7).hex(),
    accent300: accent.lighten(0.5).hex(),
    accent400: accent.lighten(0.2).hex(),
    accent500: accent.lighten(0).hex(),
    accent600: accent.lighten(-0.2).hex(),
    accent700: accent.lighten(-0.4).hex(),
    accent800: accent.lighten(-0.6).hex(),
    accent900: accent.lighten(-0.8).hex(),
    // Neutral
    neutral100: neutral.lighten(0.65).hex(),
    neutral200: neutral.lighten(0.6).hex(),
    neutral300: neutral.lighten(0.4).hex(),
    neutral400: neutral.lighten(0.25).hex(),
    neutral500: neutral.lighten(0).hex(),
    neutral600: neutral.lighten(-0.2).hex(),
    neutral700: neutral.lighten(-0.4).hex(),
    neutral800: neutral.lighten(-0.6).hex(),
    neutral900: neutral.lighten(-0.8).hex(),
  },
  fontSizes: [14, 16, 18, 20, 24, 28, 36],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  borderRadius: {
    small: "4px",
    regular: "8px",
    medium: "16px",
  },
};
