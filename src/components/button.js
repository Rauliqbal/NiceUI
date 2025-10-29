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
  "@apply bg-gray-800 shadow-sm hover:bg-gray-600": {},
  color: NICEUI_COLORS.WHITE,
  backgroundColor: "var(--niceui-color-secondary)",

  "@media (prefers-color-scheme: dark)": {
    backgroundColor: "#25252B",
    "&:hover": {
      backgroundColor: "#34343A",
    },
    color: NICEUI_COLORS.WHITE,
  },
};

const outlineButton = {
  "@apply bg-transparent focus:outline-none border": {},
  borderColor: "var(--ui-primary)",
  color: "var(--ui-primary)",

  "&:hover": {
    backgroundColor: "var(--ui-primary)",
    color: NICEUI_COLORS.WHITE,
  },
};

export default {
  ".btn": baseButtons,
  ".btn-primary": primaryButton,
  ".btn-secondary": secondaryButton,
  ".btn-outline": outlineButton,
};
