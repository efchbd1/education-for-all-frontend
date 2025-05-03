//Validates the registration fields for both parents and counselors.
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): string => {
  if (password.length < 6) return "הסיסמה חייבת לכלול לפחות 6 תווים";
  if (!/[a-zA-Z]/.test(password))
    return "הסיסמה חייבת לכלול לפחות אות אחת באנגלית.";
  if (!/\d/.test(password)) return "הסיסמה חייבת לכלול לפחות מספר אחד";
  return "";
};

//Applies only to parent registration
export const validateUsername = (username: string): string => {
  if (username.length < 6) return "שם המשתמש חייב לכלול לפחות 6 תווים";
  if (!/[a-zA-Zא-ת]/.test(username))
    return "שם המשתמש חייב לכלול לפחות אות אחת.";
  if (/[a-zA-Z]/.test(username) && /[א-ת]/.test(username))
    return "שם המשתמש לא יכול לכלול גם אותיות בעברית וגם אותיות באנגלית";
  return "";
};

//Applies only to counselor registration
export const validateFullName = (name: string): string => {
  const words = name.trim().split(/\s+/);
  if (words.length < 2 || words.length > 5)
    return "השם חייב לכלול בין 2 ל-5 מילים";
  if (!words.every((word) => /^[a-zA-Zא-ת]{2,9}$/.test(word)))
    return "כל מילה בשם חייבת לכלול בין 2 ל-9 אותיות";
  return "";
};

export const validateIsraeliID = (id: string): string => {
  if (!/^\d{9}$/.test(id)) return "מספר זהות חייב להיות בן 9 ספרות";
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let num = Number(id[i]) * (i % 2 === 0 ? 1 : 2);
    sum += num > 9 ? num - 9 : num;
  }
  return sum % 10 === 0 ? "" : "מספר זהות לא תקין.";
};

export const validatePhoneNumber = (phone: string): string => {
  return /^05\d([-]?\d{7})$/.test(phone) ? "" : "מספר נייד לא תקין";
};

export const validateYearsOfExperience = (years: string): string => {
  if (!/^\d+$/.test(years)) return "ניסיון חייב להיות מספר בין 0 ל-60";
  const num = parseInt(years);
  return num < 0 || num > 60 ? "ניסיון חייב להיות מספר בין 0 ל-60" : "";
};

//Validates bio, educational institutions, academic degrees, and work history in the counselor registration form.
export const validateTextField = (
  text: string,
  minWords: number,
  minLength: number
): string => {
  if (!text.trim()) return "השדה לא יכול להיות ריק";

  const words = text.trim().split(/\s+/);

  if (words.length < minWords) return `השדה חייב לכלול לפחות ${minWords} מילים`;

  if (
    !words.every(
      (word) =>
        /^\d+$/.test(word) || // Allows a word with numbers only, even if it's just a single character.
        /[a-zA-Zא-ת׳״־.,()\[\]{}"'?!/_]{2,}/.test(word) // Ensures at least two characters from letters and special characters.
    )
  )
    return "כל מילה שמכילה אות חייבת לכלול לפחות שני תווים";

  if (text.replace(/\s+/g, "").length < minLength)
    return `השדה חייב לכלול לפחות ${minLength} אותיות בסך הכל`;

  return "";
};

//Only for contact messages - contact us dialog and contact counselor dialog
//Validates a contact message by ensuring it contains letters, has at least 10 words, and that each word meets length constraints.
export const validateContactMessage = (value: string) => {
  const words = value.trim().split(/\s+/);
  const wordCount = words.length;

  if (!/[a-zA-Zא-ת].*[a-zA-Zא-ת]/.test(value)) {
    return "תוכן הפניה חייב לכלול גם אותיות";
  }

  if (wordCount < 10) {
    return "תוכן ההודעה חייב לכלול לפחות 10 מילים";
  }

  for (const word of words) {
    if (!/^\d+$/.test(word)) {
      if (word.length < 2) {
        return "כל מילה בהודעה חייבת להיות לפחות בת 2 אותיות (למעט מספרים)";
      }
      if (word.length > 12) {
        return "אף מילה בהודעה לא יכולה להיות ארוכה מ-12 אותיות";
      }
    }
  }

  return "";
};
