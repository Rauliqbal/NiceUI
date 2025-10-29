import colors, { NICEUI_COLORS } from "../colors.js";

const baseButtons = {
  "@apply inline-flex items-center justify-center font-medium rounded-lg px-4 py-2 transition duration-200 ease-in-out cursor-pointer":
    {},
  "&.btn-sm": {
    "@apply text-sm px-3 py-1.5": {},
  },
};

const primaryButton = {
  backgroundColor: 'var(--ui-primary)',
  color: NICEUI_COLORS.WHITE,

  // Hover
  "&:hover": {
    backgroundColor: 'var(--ui-primary-hover)',
  },
  "@apply shadow-md": {},
};

const secondaryButton = {
  "@apply bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-300": {},
};

export default {
  ".btn": baseButtons,
  ".btn-primary": primaryButton,
};
