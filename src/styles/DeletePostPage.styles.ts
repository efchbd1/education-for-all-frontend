import { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  color: "#3E2723",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
};

export const contentStyle: SxProps<Theme> = {
  maxWidth: "600px",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
};

export const headingStyle: SxProps<Theme> = {
  fontSize: "2.1em",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#6D4C41",
};

export const buttonStyle = (deleteButtonDisabled: boolean): SxProps<Theme> => ({
  backgroundColor: "#8D6E63",
  color: "white",
  padding: "10px 20px",
  fontSize: "1.5em",
  cursor: "pointer",
  marginBottom: "10px",
  opacity: deleteButtonDisabled ? 0.6 : 1,
  pointerEvents: deleteButtonDisabled ? "none" : "auto",
  border: "none",
  borderRadius: "5px",
});

export const linkContainerStyle: SxProps<Theme> = {
  display: "inline-block",
  margin: "10px",
  position: "relative",
};

export const linkStyle: SxProps<Theme> = {
  backgroundColor: "#3E2723",
  color: "white",
  padding: "10px 20px",
  fontSize: "1.2em",
  textDecoration: "none",
  display: "inline-block",
  transition: "color 0.3s",
  border: "none",
  borderRadius: "5px",
};
