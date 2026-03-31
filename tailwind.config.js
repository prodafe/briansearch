/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.1448 0.0046 264.4735)',
        foreground: 'oklch(0.9288 0.0126 255.5078)',
        card: 'oklch(0.1913 0.0060 259.2053)',
        'card-foreground': 'oklch(0.9288 0.0126 255.5078)',
        popover: 'oklch(0.1448 0.0046 264.4735)',
        'popover-foreground': 'oklch(0.9288 0.0126 255.5078)',
        primary: 'oklch(0.8430 0.2010 153.9164)',
        'primary-foreground': 'oklch(0.1448 0.0046 264.4735)',
        secondary: 'oklch(0.2500 0 0)',
        'secondary-foreground': 'oklch(1 0 0)',
        muted: 'oklch(0.2393 0.0059 268.8777)',
        'muted-foreground': 'oklch(0.7155 0.0129 256.7878)',
        accent: 'oklch(0.2393 0.0059 268.8777)',
        'accent-foreground': 'oklch(0.9288 0.0126 255.5078)',
        destructive: 'oklch(0.5628 0.2134 25.5645)',
        'destructive-foreground': 'oklch(0.1448 0.0046 264.4735)',
        border: 'oklch(0.2393 0.0059 268.8777)',
        input: 'oklch(0.2393 0.0059 268.8777)',
        ring: 'oklch(0.8430 0.2010 153.9164)',
      },
    },
  },
  plugins: [],
}