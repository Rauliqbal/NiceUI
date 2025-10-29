import plugin from "tailwindcss/plugin";
import bodyStyles from "./src/base.js";
import { NICEUI_DARK_THEME, NICEUI_LIGHT_THEME } from "./src/colors.js";
import buttonComponents from "./src/components/button.js";
import cardComponents from "./src/components/card.js";

const allComponents = {
  ...buttonComponents,
  ...cardComponents,
};

export default plugin(function ({ addComponents, addBase }) {
  // Define all theme variables (:root and .dark
  addBase({
    ":root": NICEUI_LIGHT_THEME,
  });
  addBase({
    ":is(.dark)": NICEUI_DARK_THEME,
  });

  // Style Body
  addBase(bodyStyles);

  // Style Component
  addComponents(allComponents);
});
