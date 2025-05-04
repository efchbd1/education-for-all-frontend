// styles/RulesPage.styles.ts
import { styled } from '@mui/material/styles';
import { Typography, Container as MuiContainer } from '@mui/material';

export const RulesContainer = styled(MuiContainer)(({ theme }) => ({
  maxWidth: '900px',
  margin: 'auto',
  marginTop: theme.spacing(8),
  direction: 'rtl',
}));

export const RulesTitle = styled(Typography)(({ theme }) => ({
  color: '#5d4037',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  fontSize: '3rem',
}));

export const CircularGrid = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(4),
}));

export const CardContainer = styled('div')(({ theme }) => ({
  perspective: '1000px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2),
}));

export const Card = styled('div')(({ theme }) => ({
  width: '290px',
  height: '290px',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
}));

export const CardSide = styled('div')(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px',
  boxSizing: 'border-box',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

export const Front = styled(CardSide)(() => ({
  backgroundColor: 'rgba(255, 245, 236, 0.6)',
  color: '#3e2723',
  fontSize: '2.5rem',
  fontWeight: 'bold',
}));

export const Back = styled(CardSide)(() => ({
  backgroundColor: '#d7ccc8',
  color: '#5d4037',
  transform: 'rotateY(180deg)',
  fontSize: '1rem',
}));
