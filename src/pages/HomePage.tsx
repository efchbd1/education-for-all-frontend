import React from 'react';
import { Box, Typography } from '@mui/material';
import TopicList from '../components/topic/TopicList';
import {
    rootStyle,
    titleStyle,
    subtitleStyle,
    descriptionStyle
} from '../styles/HomePage.styles';

const HomePage: React.FC = () => {

    return (
        <Box sx={rootStyle}>
            <Typography variant="h3" gutterBottom sx={titleStyle}>
                ברוכים הבאים לקהילה החינוכית חינוך לעם, מרכז הידע וההשראה להורים וליועצים כאחד!
            </Typography>
            <Typography variant="h5" gutterBottom sx={subtitleStyle}>
                זהו המקום שבו הורים ויועצים נפגשים, לשיחות שמקדמות את ההורות ומעצימות את הילדים. כאן תמצאו תמיכה, עצות מקצועיות ושפע הזדמנויות לשפר את החינוך המשפחתי!
            </Typography>
            <Typography gutterBottom sx={descriptionStyle}>
                אנא בחרו עמוד
            </Typography>
            <TopicList />
        </Box>
    );
};

export default HomePage;
