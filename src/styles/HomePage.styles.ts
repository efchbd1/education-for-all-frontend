import { SxProps, Theme } from '@mui/material';

export const rootStyle: SxProps<Theme> = {
  marginTop: '20px',
  padding: '20px',
  paddingTop: '80px',
  direction: 'rtl',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  textAlign: 'center',
};

export const titleStyle: SxProps<Theme> = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#3E2723',
  '@media (max-width:600px)': {
    fontSize: '1.25rem',
  },
};

export const subtitleStyle: SxProps<Theme> = {
  fontSize: '1.25rem',
  color: '#6D4C41',
  '@media (max-width:600px)': {
    fontSize: '1rem',
  },
};

export const descriptionStyle: SxProps<Theme> = {
  fontSize: '1.1rem',
  color: '#3E2723',
  '@media (max-width:600px)': {
    fontSize: '0.9rem',
  },
};
