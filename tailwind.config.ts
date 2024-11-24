import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'var(--marine-blue)', 
        'purplish-blue': 'var(--purplish-blue)',
        'pastel-blue': 'var(--pastel-blue)',
        'light-blue': 'var(--light-blue)',
        'strawberry-red': 'var(--strawberry-red)',
        'cool-gray': 'var(--cool-gray)',
        'light-gray': 'var(--light-gray)',
        'magnolia': 'var(--magnolia)',
        'alabaster': 'var(--alabaster)',
        'white': 'var(--white)',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        paragraph: 'var(--font-size-paragraph)',
      },
    },
  },
  plugins: [],
} satisfies Config;
