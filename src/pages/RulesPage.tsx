import { Container, Typography } from '@material-ui/core';
import { useRulesPage } from 'styles/RulesPage.styles';

const FlipCards = () => {
  const classes = useRulesPage();

  const rules = [
    {
      title: 'כללים להורים',
      content: `
        <ul>
          <li><strong>שמרו על כבוד הדדי:</strong> אין להשתמש בשפה פוגענית, מעליבה או מזלזלת.</li>
          <li><strong>פרטיות וסודיות:</strong> הימנעו משיתוף מידע אישי מזהה של ילדיכם או של אחרים.</li>
          <li><strong>דיוק בתיאור הבעיה:</strong> השתדלו לתאר את הבעיה בצורה ברורה.</li>
        </ul>
      `,
    },
    {
      title: 'כללים ליועצים',
      content: `
        <ul>
          <li><strong>שמרו על מקצועיות:</strong> כל תשובה צריכה להיות מבוססת על ידע וניסיון.</li>
          <li><strong>שפה מכבדת ומכילה:</strong> השתמשו בשפה נעימה ותומכת.</li>
          <li><strong>שקיפות ואמינות:</strong> הציגו פרטים אמיתיים ומדויקים בפרופיל היועץ.</li>
        </ul>
      `,
    },
    {
      title: 'כללים לכולם',
      content: `
        <ul>
          <li><strong>פרסום עצמי:</strong> אין לפרסם שירותים או מוצרים ללא אישור.</li>
          <li><strong>ניהול הפורום:</strong> מנהלי הפורום רשאים למחוק תוכן לא מתאים.</li>
        </ul>
      `,
    },
  ];

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        תקנון הפורום
      </Typography>
      <div className={classes.circularGrid}>
        {rules.map((rule, index) => (
          <div key={index} className={classes.cardContainer}>
            <div className={classes.card}>
              <div className={`${classes.cardSide} ${classes.front}`}>
                {rule.title}
              </div>
              <div
                className={`${classes.cardSide} ${classes.back}`}
                dangerouslySetInnerHTML={{ __html: rule.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FlipCards;