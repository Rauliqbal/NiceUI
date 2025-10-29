export const NICEUI_COLORS = {
  PRIMARY: '#1A3D64',
  PRIMARY_HOVER: '#2A5D94',
  
  // Utilities
  WHITE: 'white',
  GRAY_200: '#E5E7EB',
  GRAY_800: '#1F2937', 
};

// Style Light Theme
export const NICEUI_LIGHT_THEME = {
  '--ui-primary': NICEUI_COLORS.PRIMARY,
  '--ui-primary-hover': NICEUI_COLORS.PRIMARY_HOVER,
  '--ui-background': '#F5E5E1', 
  '--ui-foreground': '#1A2A4F',
  '--ui-card-bg': NICEUI_COLORS.WHITE,
  '--ui-card-border': NICEUI_COLORS.GRAY_200,
};

// Style Dark Theme
export const NICEUI_DARK_THEME = {
  '--ui-primary': NICEUI_COLORS.PRIMARY,
  '--ui-primary-hover': '#4A7CA8',
  '--ui-background': '#15151A',
  '--ui-foreground': '#F5F5FA',
  '--ui-card-bg': '#202025',
  '--ui-card-border': '#303035',
};