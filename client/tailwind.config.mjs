// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  experimental: {
    // 👇 Ceci désactive Lightning CSS
    optimizeUniversalDefaults: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
