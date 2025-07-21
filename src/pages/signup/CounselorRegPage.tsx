import React from 'react';
import { TextField, Button, Typography, Container, Link, IconButton, InputAdornment, Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { AccountCircle, Lock, Email, Visibility, VisibilityOff, Phone, School, Work, Badge, Description } from '@mui/icons-material';
import * as classes from '../../styles/form';
import { useCounselorRegForm } from '../../hooks/useCounselorRegForm';
import { PATHS } from 'routes/paths';
import { Link as RouterLink } from 'react-router-dom';
const CounselorRegPage: React.FC = () => {

  const {
    formData,
    errors,
    handleSubmit,
    handleChange,
    showPassword,
    showConfirmPassword,
    handleClickShowPassword,
    handleClickShowConfirmPassword
  } = useCounselorRegForm();

  return (
    <Container maxWidth="sm" sx={classes.container}>
      <Typography variant="h2" align="center" sx={classes.title}>
        רישום יועץ
      </Typography>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <TextField
          fullWidth
          margin="normal"
          label="שם מלא"
          name="name"
          placeholder="הקלידו שם מלא: שם פרטי ושם משפחה"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          InputProps={{ startAdornment: <AccountCircle sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="סיסמה"
          name="password"
          placeholder="הקלידו סיסמה"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            startAdornment: <Lock sx={classes.icon} />,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            style: { direction: 'rtl' }
          }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="אימות סיסמה"
          name="confirmPassword"
          placeholder="הקלידו שוב את הסיסמה"
          type={showConfirmPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          InputProps={{
            startAdornment: <Lock sx={classes.icon} />,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            style: { direction: 'rtl' }
          }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="תעודת זהות"
          name="identityNumber"
          placeholder="הקלידו מספר זהות. מספר הזהות משמש לאימות בלבד והוא לא יפורסם"
          value={formData.identityNumber}
          onChange={handleChange}
          error={!!errors.identityNumber}
          helperText={errors.identityNumber}
          InputProps={{ startAdornment: <Badge sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="פלאפון נייד"
          name="phoneNumber"
          placeholder="הקלידו מספר פלאפון. מספר הפלאפון משמש לאימות בלבד והוא לא יפורסם"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          InputProps={{ startAdornment: <Phone sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="אימייל"
          name="email"
          placeholder="הקלידו כתובת אימייל. כתובתכם לא תפורסם באתר"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{ startAdornment: <Email sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="ניסיון"
          name="yearsOfExperience"
          placeholder="הקלידו שנות ניסיון"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          error={!!errors.yearsOfExperience}
          helperText={errors.yearsOfExperience}
          InputProps={{ startAdornment: <Work sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="היסטוריה תעסוקתית"
          name="workHistory"
          placeholder="הקלידו היסטוריה תעסוקתית"
          value={formData.workHistory}
          onChange={handleChange}
          error={!!errors.workHistory}
          helperText={errors.workHistory}
          InputProps={{ startAdornment: <Description sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="תארים אקדמיים"
          name="academicDegrees"
          placeholder="הקלידו תארים אקדמיים"
          value={formData.academicDegrees}
          onChange={handleChange}
          error={!!errors.academicDegrees}
          helperText={errors.academicDegrees}
          InputProps={{ startAdornment: <School sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="מוסדות לימוד"
          name="educationalInstitutions"
          placeholder="הקלידו מוסדות לימוד"
          value={formData.educationalInstitutions}
          onChange={handleChange}
          error={!!errors.educationalInstitutions}
          helperText={errors.educationalInstitutions}
          InputProps={{ startAdornment: <School sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="קצת על עצמך"
          name="bio"
          placeholder="הקלידו ביוגרפיה קצרה"
          value={formData.bio}
          onChange={handleChange}
          error={!!errors.bio}
          helperText={errors.bio}
          InputProps={{ startAdornment: <Description sx={classes.icon} />, style: { direction: 'rtl' } }}
          sx={classes.textField}
        />

        <FormControl error={!!errors.agreeToTerms} component="fieldset">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleChange}
                name="agreeToTerms"
              />
            }
            label={
              <span style={{ direction: "rtl", color: "#333", fontSize: 14 }}>
                אני מתחייב/ת לעמוד ב
                <RouterLink
                  to={PATHS.ForumRules} // שינוי 2: החלפת href ב-to
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#6A4E23",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  תקנון הפורום
                </RouterLink>
              </span>
            }
            labelPlacement="start"
            style={{ direction: "rtl" }}
          />
          <FormHelperText>{errors.agreeToTerms}</FormHelperText>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={classes.button}
        >
          הירשמו לפורום
        </Button>
      </form>
    </Container>
  );
};

export default CounselorRegPage;