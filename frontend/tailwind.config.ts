import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      screens: {
        'xs': '400px',
      },
      colors : {
        "primary": "#563FE7",
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
export default config;