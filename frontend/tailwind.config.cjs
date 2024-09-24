const { default: daisyui } = require('daisyui');
import catppuccin from '@catppuccin/daisyui'

module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  daisyui: {
    themes: [
      catppuccin('macchiato'),
      {geode: {
        "primary": "#ecabde",
        "secondary": "#af69b1",
        "accent": "#8CC",
        "neutral": "#2e2d3e",
        "base-100": "#2e2d3e",
        "info": "#8AADF4",
        "success": "#A6DA95",
        "warning": "#EED49F",
        "error": "#ED8796",
      },},
    ],
  },
};
