// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma brand palette
        'serene-mint': '#D9F8F0',
        'warm-ivory': '#F8F4E3',
        'sage-green': '#A2B089',
        'blush-pink': '#F3B8C8',
        'golden-sand': '#EFD6AC',
        'leaf-green': '#74B288',
        'forest-canopy': '#2A4D3A',
        'botanical-charcoal': '#2C2C2A',

        // Mapping to Tailwind design tokens
        primary: '#2A4D3A', // forest canopy for primary brand color
        secondary: '#74B288', // leaf green
        accent: '#F3B8C8', // blush pink as main accent
        'accent-dark': '#A2B089', // sage green for darker accents
        'text-primary': '#2C2C2A', // botanical charcoal for main text
        'text-secondary': '#A2B089', // sage green for secondary text
        background: '#F8F4E3', // warm ivory
        'background-alt': '#D9F8F0', // serene mint as alt background
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #F8F4E3, #D9F8F0)',
        'gradient-accent': 'linear-gradient(135deg, #F3B8C8, #EFD6AC)',
        'gradient-radial': 'radial-gradient(circle, #D9F8F0, #F8F4E3)',
      },
    },
  },
  plugins: [],
};
