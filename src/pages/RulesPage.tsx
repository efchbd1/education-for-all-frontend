import { Container, Typography } from '@mui/material';
import {
  RulesContainer,
  RulesTitle,
  CircularGrid,
  CardContainer,
  Card,
  Front,
  Back
} from 'styles/RulesPage.styles';


const FlipCards = () => {

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
    <RulesContainer>
      <RulesTitle variant="h4">תקנון הפורום</RulesTitle>
      <CircularGrid>
        {rules.map((rule, i) => (
          <CardContainer key={i}>
            <Card>
              <Front>{rule.title}</Front>
              <Back dangerouslySetInnerHTML={{ __html: rule.content }} />
            </Card>
          </CardContainer>
        ))}
      </CircularGrid>
    </RulesContainer>
  );
};

export default FlipCards;