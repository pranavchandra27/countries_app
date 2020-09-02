export const theme = theme => {
  return {
    white: "hsl(0, 0%, 100%)",
    bg: theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    text: theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
    elements: theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
  };
};
