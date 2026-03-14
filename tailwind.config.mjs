/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["\"Fraunces\"", "serif"],
        body: ["\"Spectral\"", "serif"]
      },
      colors: {
        ink: {
          50: "#f7f5f2",
          100: "#f0ebe5",
          200: "#e3dad0",
          300: "#cbbeb0",
          400: "#a79083",
          500: "#8a7266",
          600: "#735a50",
          700: "#5c473f",
          800: "#463632",
          900: "#2a1f1d"
        },
        accent: {
          300: "#b7d3d0",
          500: "#6aa6a0",
          700: "#3f746f"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(32, 24, 19, 0.08)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 1px 1px, rgba(26, 20, 16, 0.06) 1px, transparent 0)"
      }
    }
  },
  plugins: [typography]
};
