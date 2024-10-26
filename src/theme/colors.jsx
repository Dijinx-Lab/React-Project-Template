export const lightColors = {
  primary: "#000000",
  background: "#FFFFFF",
  buttonText: "#FFFFFF",
  // Add more colors as needed
};

export const darkColors = {
  primary: "#FFFFFF",
  background: "#000000",
  buttonText: "#000000",
  // Add more colors as needed
};

export const getColors = (isDarkMode) => (isDarkMode ? darkColors : lightColors);
