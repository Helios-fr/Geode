const { default: daisyui } = require('daisyui');
import catppuccin from '@catppuccin/daisyui'

module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      // Use verdana as the default font
      sans: ['Verdana', 'sans-serif'],
      // Use roboto as the default monospace font
      mono: ['Roboto Mono', 'monospace'],
    },
  },
  daisyui: {
    themes: [
      catppuccin('macchiato'),
      {geode: {
        "primary": "#ecabde",
        "primary-content": "#130b12",
        "secondary": "#af69b1",
        "secondary-content": "#0b040c",
        "accent": "#8cc",
        "accent-content": "#060f0f",
        "neutral": "#2e2d3e",
        "neutral-content": "#d1d1d5",
        "base-100": "#2e2d3e",
        "base-200": "#272635",
        "base-300": "#1f1f2b",
        "base-content": "#d1d1d5",
        "info": "#8AADF4",
        "info-content": "#070b14",
        "success": "#A6DA95",
        "success-content": "#0a1108",
        "warning": "#EED49f",
        "warning-content": "#141009",
        "error": "#ED8796",
        "error-content": "#140608",
      },},
    ],
  },
};
