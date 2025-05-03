import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Link,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar
} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';

const AboutMePage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ direction: 'rtl', py: 4, fontFamily: 'Arial, sans-serif' }}>
      <Container maxWidth="md" sx={{ direction: 'rtl', py: 4, fontFamily: 'Arial, sans-serif', pt: 10 }}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" gutterBottom>
            אפרת בדיל
          </Typography>
          <Typography variant="subtitle1" color="black">
            Full Stack Developer
          </Typography>
          <Box mt={1} display="inline-flex" alignItems="center">
            <EmailIcon fontSize="small" sx={{ ml: 1 }} />
            <Link href="mailto:efrat.developer@gmail.com" underline="hover" color="black">
              efrat.developer@gmail.com
            </Link>
          </Box>
        </Box>
      </Container>

      {/* About Section */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          מי אני?
        </Typography>
        <Typography variant="body1" paragraph>
          Full Stack Developer עם תשוקה ללמוד ולהתפתח. יש לי יכולת למידה עצמית גבוהה, ואני מצויה בתהליך של למידה מתמדת. אני מתמחה בפיתוח אתרים ומערכות מקצה לקצה, כולל כתיבת אפיונים מדויקים והטמעת פתרונות טכנולוגיים עדכניים. כרגע אני מחפשת את האתגר הבא שלי ואשמח להכיר הזדמנויות שעשויות להתאים לי.
        </Typography>
        <Button variant="outlined" href="mailto:efrat.developer@gmail.com">
          צרו קשר
        </Button>
      </Paper>

      {/* Featured Project */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          אתר נבחר
        </Typography>
        <Typography variant="h6" gutterBottom>
          פיתוח פורום מאובטח להורים וליועצים חינוכיים
        </Typography>
        <Typography variant="body1" paragraph>
          פלטפורמה מבוססת C# ו-React, עם דגש על תקשורת מאובטחת בין הורים ליועצים חינוכיים.
        </Typography>
        <Paper elevation={1} sx={{ backgroundColor: '#fff3cd', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography fontWeight="bold">
            רוצים לראות איך זה נראה מאחורי הקלעים? הקוד המלא מחכה לכם ב-GitHub
          </Typography>
          <Button variant="contained" size="small" href="mailto:efrat.developer@gmail.com">
            פנייה קצרה במייל, והוא אצלכם!
          </Button>
        </Paper>
        <Box component="ul" sx={{ mt: 2, pl: 2 }}>
          {[
            ['Backend', 'C#, ASP.NET Core, Entity Framework'],
            ['Frontend', 'React, Redux, Axios, Material UI, Responsive Design'],
            ['DB', 'SQL Server'],
            ['ML API', 'Azure Speech Services, Web Speech API'],
            ['Security', 'JWT, HTTP-only Cookies'],
            ['Design Patterns', 'Dependency Injection, Singleton, Repository'],
            ['Communication', 'SMTP (MailKit)']
          ].map(([title, desc]) => (
            <Box component="li" key={title} mb={1}>
              <Typography component="span" fontWeight="bold">{title}:</Typography>&nbsp;{desc}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Experience & Education Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <WorkIcon sx={{ mr: 1 }} />
              <Typography variant="h6">ניסיון מקצועי</Typography>
            </Box>
            <Typography variant="subtitle2" gutterBottom>
              Extratech | Full Stack Developer | 2024
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <li>פיתוח מערכת הזמנות מתקדמת עם מודול ניהול עובדים.</li>
              <li>עבודה עם NestJS, MongoDB, React, Docker בסביבה מבוססת microservices.</li>
              <li>כתיבת אפיונים מדויקים והבטחת עמידה בדרישות.</li>
              <li>פיתוח בדיקות יחידה שהובילו לצמצום באגים משמעותי.</li>
              <li>שיתוף פעולה עם צוותי הפיתוח והצגת אחריות מקצועית.</li>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <SchoolIcon sx={{ mr: 1 }} />
              <Typography variant="h6">השכלה</Typography>
            </Box>
            <Box component="ul" sx={{ pl: 2 }}>
              <li><strong>2024-2025:</strong> קורס Data Science - למידת מכונה ולמידה עמוקה – Ready Group והרשות לחדשנות.</li>
              <li><strong>2022-2024:</strong> הנדסת תוכנה – מה"ט (ממוצע 97).</li>
              <li>תכנית מצוינות Ultra Code Excellence Program – KamaTech.</li>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Technical Skills Accordion */}
      <Box mt={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <CodeIcon sx={{ mr: 1 }} />
          <Typography variant="h6">מיומנויות טכניות</Typography>
        </Box>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Backend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              Languages: C#, Java, JavaScript, TypeScript, SQL, C, C++, Python<br />
              Frameworks: Node.js, NestJS, ASP.NET Core, Entity Framework, REST API
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Frontend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              JavaScript, HTML5, CSS3 (Bootstrap, Responsive Design)<br />
              React, Angular, Redux, Axios, Material UI, Angular Material
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Other tools</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Git, Docker, Microservices, Unit Testing (Jest), SQL Server, MongoDB
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Languages */}
      <Box mt={4} mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h6">שפות</Typography>
        </Box>
        <Box component="ul" sx={{ pl: 2 }}>
          <li>עברית – שפת אם</li>
          <li>אנגלית – שליטה ברמה גבוהה</li>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMePage;
