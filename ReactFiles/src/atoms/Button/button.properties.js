export const getPrimaryProps = backgroundColor => ({
  padding: "0.5rem 1rem",
  backgroundColor: backgroundColor,
  color: "white",
  border: "none",
  cursor: "pointer"
});

export const getSecondaryProps = (size, color) => ({
  border: "none",
  color: color,
  fontWeight: "bolder",
  fontSize: `${size} px`,
  backgroundColor: "inherit",
  cursor: "pointer",
})