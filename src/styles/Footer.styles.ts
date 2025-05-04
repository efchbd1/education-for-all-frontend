// styles/Footer.styles.ts
import { styled } from '@mui/material/styles';
import { Typography, Link as MuiLink, Box } from '@mui/material';

// Root wrapper
export const FooterRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '10vh',
}));

// Footer bar
export const FooterBar = styled('footer')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  backgroundColor: '#D77F3E',
  direction: 'rtl',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 1000,
  borderTop: `1px solid ${theme.palette.primary.light}`,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

// Copyright text
export const CopyrightText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '0.9rem',
  position: 'relative',
  '& a, & span': {
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.3s',
    margin: '0 10px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '0%',
      height: '2px',
      backgroundColor: theme.palette.primary.light,
      transition: 'width 0.3s',
    },
    '&:hover': {
      color: 'black',
      '&::after': {
        width: '100%',
      },
    },
  },
}));

// Styled MuiLink for footer
export const FooterLink = styled(MuiLink)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'none',
  },
}));

// Box wrapper for secondary text
export const SecondaryBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
