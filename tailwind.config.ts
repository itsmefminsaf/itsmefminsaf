import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          "100": "#999",
          "200": "#888",
          "300": "#777",
          "400": "#666",
          "500": "#555",
          "600": "#444",
          "700": "#333",
          "800": "#222",
          "900": "#111",
        },
      },
    },
  },
  plugins: [],
};
export default config;
