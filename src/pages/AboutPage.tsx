import React from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import classes from 'styles/AboutPage.styles';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <Container sx={classes.container}>
      {/* Main title section */}
      <Typography variant="h4" sx={classes.title}>
        מי אנחנו
      </Typography>

      <Card sx={classes.card}>
        <CardContent>
          <Typography variant="body1" sx={classes.cardContent}>
            ברוכים הבאים לפורום החינוכי שלנו - מרחב ייחודי ומקצועי המיועד לתמיכה וסיוע להורים בנושאי חינוך וגידול ילדים. מטרתנו היא להעניק להורים כלים ועצות מותאמות אישית ממיטב היועצים המומחים בתחום החינוך, תוך יצירת קהילה תומכת ומבינה.
          </Typography>
        </CardContent>
      </Card>

      {/* What we offer - Services description */}
      <Typography variant="h6" sx={classes.subtitle}>
        מה אנחנו מציעים?
      </Typography>
      <Card sx={classes.card}>
        <CardContent>
          <Typography variant="body1" sx={classes.cardContent}>
            הפורום החינוכי שלנו נבנה מתוך הבנה עמוקה של האתגרים היומיומיים איתם מתמודדים הורים בכל שלבי הגידול והחינוך. כאן, כל הורה יכול לפתוח אשכול ולשתף את הבעיה או השאלה החינוכית שלו, כשהוא מקבל מענה מקצועי ומדויק מיועצים מומחים.
          </Typography>
        </CardContent>
      </Card>

      {/* Benefits for parents */}
      <Typography variant="h6" sx={classes.subtitle}>
        מה יוצא לכם מזה כהורים:
      </Typography>
      <Card sx={classes.card}>
        <CardContent>
          <ul>
            <li style={{ marginBottom: "8px" }}><strong>מענה זמין ובחינם:</strong> המענה שניתן להורים זמין לאורך כל הזמן וללא עלות, כך שכל הורה יכול לקבל תשובות לשאלותיו בצורה נוחה ונגישה.</li>
            <li style={{ marginBottom: "8px" }}><strong>שקיפות ואמינות:</strong> היועצים שלנו מציגים את פרטיהם, כולל תעודות, מוסדות לימוד ותחומי התמחות, כך שתוכלו להיות בטוחים שהמענה שאתם מקבלים הוא אמין ומקצועי.</li>
            <li style={{ marginBottom: "8px" }}><strong>קשר אישי עם היועץ:</strong> התרשמתם מהתשובה שקיבלתם? תוכלו ליצור קשר ישיר עם היועץ דרך האתר ולקבל ליווי אישי ומעמיק יותר.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Benefits for counselors */}
      <Typography variant="h6" sx={classes.subtitle}>
        מה יוצא לכם מזה כיועצים:
      </Typography>
      <Card sx={classes.card}>
        <CardContent>
          <ul>
            <li style={{ marginBottom: "8px" }}><strong>פלטפורמה מקצועית ובולטת:</strong> האתר שלנו מציע לכם במה מקצועית להציג את הידע והניסיון שלכם ולהרחיב את מעגל הלקוחות שלכם.</li>
            <li style={{ marginBottom: "8px" }}><strong>חשיפה לקהל יעד ממוקד:</strong> הפורום מושך הורים המחפשים ייעוץ מקצועי ואיכותי, מה שמאפשר לכם להגיע לקהל היעד המדויק שלכם.</li>
            <li style={{ marginBottom: "8px" }}><strong>הזדמנות להעמיק את הקשר המקצועי:</strong> לאחר שהורים מתרשמים מתשובותיכם, יש לכם אפשרות להמשיך ולייעץ להם באופן פרטני כאשר הם פונים אליכם.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Why choose us - Differentiators */}
      <Typography variant="h6" sx={classes.subtitle}>
        למה דווקא אצלנו?
      </Typography>
      <Card sx={classes.card}>
        <CardContent>
          <ul>
            <li style={{ marginBottom: "8px" }}><strong>מקצועיות:</strong> היועצים שלנו הם אנשי מקצוע מנוסים ומומחים בתחומם, המעניקים מענה מקיף ומדויק לבעיות ושאלות חינוכיות.</li>
            <li style={{ marginBottom: "8px" }}><strong>קהילתיות:</strong> אנו מאמינים בכוח של קהילה תומכת. כאן תוכלו למצוא שותפים לדרך, לקבל תמיכה ועצה ולהיות חלק מקהילה חינוכית פעילה.</li>
            <li style={{ marginBottom: "8px" }}><strong>נגישות ונוחות:</strong> הממשק שלנו ידידותי ונוח לשימוש, מה שמאפשר לכם לעלות שאלות ולקבל תשובות בקלות ובמהירות.</li>
          </ul>
        </CardContent>
      </Card>

      <Typography variant="body1">
        אנו מזמינים אתכם להצטרף אלינו, לשתף ולהתייעץ, ולמצוא את התשובות והעצות הטובות ביותר עבורכם ועבור ילדיכם. יחד, ניצור סביבה חינוכית תומכת ומקדמת.
      </Typography>

      <Button sx={classes.button} onClick={handleNavigateHome}>
        חזרה לדף הבית
      </Button>
    </Container>
  );
};

export default AboutPage;