import { makeStyles } from "@material-ui/core/styles";

export const useFooterStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "10vh",
  },

  footer: {
    padding: theme.spacing(1, 2),
    backgroundColor: "#D77F3E",
    direction: "rtl",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
    borderTop: `1px solid ${theme.palette.primary.light}`,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },

  copyright: {
    textAlign: "center",
    fontSize: "0.9rem",
    "& a, & span": {
      textDecoration: "none",
      color: "white",
      transition: "color 0.3s",
      margin: "0 10px",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "0%",
        height: "2px",
        backgroundColor: theme.palette.primary.light,
        transition: "width 0.3s",
      },
      "&:hover": {
        color: "black",
        "&::after": {
          width: "100%",
        },
      },
    },
  },
}));
