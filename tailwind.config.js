module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      'col-span-1',
      'flex',
      'shadow-sm',
      'rounded-md',
      'flex-shrink-0',
      'items-center',
      'justify-center',
      'w-16',
      'text-white',
      'text-sm',
      'font-medium',
      'rounded-l-md',
      'flex-1',
      'px-4',
      'py-2',
      'pr-2',
      'w-8',
      'h-8',
      'inline-flex',
      'text-gray-400',
      'rounded-full',
      'bg-transparent',
      'hover:text-gray-500',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-indigo-500',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
