import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "line": "radial-gradient(circle, rgba(255,255,255,0), #552dc2)",
        "download": "radial-gradient(circle, rgba(11, 25, 129, .31), rgba(107, 16, 199, .98))",
        "footer": "linear-gradient(rgba(68, 4, 124, .16), rgba(0, 0, 0, 0) 94%)",
        "login": "radial-gradient(circle, rgba(71, 64, 148, .32), #000 250px)",
        "button": "radial-gradient(circle, rgba(149, 81, 189, .51), rgba(213, 172, 255, .09))",
      },
      backgroundColor: {
        "input": "rgba(150, 150, 150, .1)",
      },
      boxShadow: {
        "line": "0 0 19px 12px rgba(87, 26, 117, 0.42)",
        "download": "0 2px 20px 5px rgba(245, 235, 255, .17)",
      },
      borderColor: {
        "input": "rgba(190, 190, 190, .05)"
      }
    },
  },
  plugins: [],
};
export default config;
