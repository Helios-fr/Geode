const { default: daisyui } = require('daisyui');

module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        geodelight: {
          "primary": "#ac83ac",
          "secondary": "#ECABDE",
          "accent": "#83abac",
          "neutral": "#361633",
          "base-100": "#E4E4E9",
          "info": "#8AADF4",
          "success": "#A6DA95",
          "warning": "#EED49F",
          "error": "#ED8796",
        },
      },
      {
        geodedark: {
          "primary": "#ac83ac",
          "secondary": "#ECABDE",
          "accent": "#83abac",
          "neutral": "#361633",
          "base-100": "#2e2d3e",
          "info": "#8AADF4",
          "success": "#A6DA95",
          "warning": "#EED49F",
          "error": "#ED8796",
        },
      },
    ],
  },
};
