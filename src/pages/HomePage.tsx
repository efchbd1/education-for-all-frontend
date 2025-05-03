import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import TopicList from '../components/topic/TopicList';

const useStyles = makeStyles<Theme>((theme) => ({
    root: {
        marginTop: '20px',
        padding: '20px',
        paddingTop: '80px',
        direction: 'rtl',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',

    },

    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#3E2723',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem',
        },
    },

    subtitle: {
        fontSize: '1.25rem',
        color: '#6D4C41',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },

    description: {
        fontSize: '1.1rem',
        color: '#3E2723',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
        },
    },
}));

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h3" gutterBottom className={classes.title}>
                ברוכים הבאים לקהילה החינוכית חינוך לעם, מרכז הידע וההשראה להורים וליועצים כאחד!
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.subtitle}>
                זהו המקום שבו הורים ויועצים נפגשים, לשיחות שמקדמות את ההורות ומעצימות את הילדים. כאן תמצאו תמיכה, עצות מקצועיות ושפע הזדמנויות לשפר את החינוך המשפחתי!
            </Typography>
            <Typography gutterBottom className={classes.description}>
                אנא בחרו עמוד
            </Typography>
            <TopicList />
        </Box>
    );
};

export default HomePage;
