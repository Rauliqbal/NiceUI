const plugin = require('tailwindcss/plugin');

const NICEUI_PRIMARY = '#1A3D64';
const NICEUI_PRIMARY_HOVER = '#2A5D94'; 
const NICEUI_BACKGROUND = '#F5E5E1';
const NICEUI_FOREGOUND = '#1A2A4F';

import buttonComponents from './src/components/button';

const allComponents= {
  ...buttonComponents
}

module.exports = plugin(function({ addComponents, addBase,theme }) {
  addBase({
    'body': {
    backgroundColor: NICEUI_BACKGROUND,
    color: NICEUI_FOREGOUND
    }
  })

  // --- KOMPONEN BUTTON (btn) ---
  addComponents(allComponents);

  // --- KOMPONEN CARD (card) ---
  // addComponents({
  //   '.card': {
  //     '@apply bg-white p-6 rounded-xl shadow-lg border border-gray-100': {},
  //   },
  //   '.card-title': {
  //     '@apply text-xl font-bold text-gray-900 mb-2': {},
  //   },
  //   '.card-body': {
  //     '@apply text-gray-600': {},
  //   }
  // });
});