import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8, 
});

export const container = {
  paddingTop: '80px',
  paddingBottom: '40px',
  paddingLeft: theme.spacing(1),  
  paddingRight: theme.spacing(1), 
  backgroundColor: 'rgba(255, 255, 255, 0.6)',

  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2), 
    paddingRight: theme.spacing(2), 
  },
};

export const title = {
  color: '#6A4E23',
  fontFamily: 'Comic Sans MS',
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: '40px',
};

export const inputField = {
  background: '#ffffff',
  width: '100%',
  boxSizing: 'border-box',
};

export const textField = {
  marginBottom: '20px',
  background: 'rgba(255, 255, 255, 0.6)',
  width: '100%',
  boxSizing: 'border-box',
};

export const icon = {
  color: '#6A4E23',
};

export const button = {
  backgroundColor: '#8D6E63',
  color: '#fff',
  fontWeight: 'bold',
  width: '100%',
};

export const errorText = {
  marginBottom: '20px',
};
