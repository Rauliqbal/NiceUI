// import colors from "../colors.js";

const baseCards = {
  backgroundColor: "var(--ui-card-bg)",
  "@apply overflow-hidden rounded-xl": {},
};

const cardBody = {
  color: "var(--ui-foregound)",
  "@apply p-4 md:p-6": {},
};

export default {
  ".card": baseCards,
  ".card-body": cardBody,
};
