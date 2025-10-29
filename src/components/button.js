import { NICEUI_COLORS } from "../colors.js";

const baseButtons = {
  "@apply inline-flex items-center justify-center font-medium rounded-lg px-4 py-2.5 active:scale-95 transition duration-300 ease-out cursor-pointer":
    {},
  "&.btn-sm": {
    "@apply rounded-md text-sm px-3 py-1.5": {},
  },
  "&.btn-lg": {
    "@apply text-sm px-8 py-4": {},
  },
};

const primaryButton = {
  backgroundColor: "var(--ui-primary)",
  color: NICEUI_COLORS.WHITE,

  "&:hover": {
    backgroundColor: "var(--ui-primary-hover)",
  },
};

const secondaryButton = {
  "@apply bg-gray-200 text-gray-800 shadow-sm hover:bg-gray-300": {},
};

export default {
  ".btn": baseButtons,
  ".btn-primary": primaryButton,
};
