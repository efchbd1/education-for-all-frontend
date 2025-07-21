import React from "react";
import { TextField, Button, Typography, Container, Link, Checkbox, FormControlLabel, FormControl, FormHelperText, IconButton, InputAdornment } from "@mui/material";
import { AccountCircle, Lock, Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { PATHS } from "routes/paths";
import useUserRegForm from "../../hooks/useUserRegForm";
import { Link as RouterLink } from 'react-router-dom'; 
import * as classes from "../../styles/form"

const UserRegPage: React.FC = () => {
  const {
    formData,
    emailExists,
    errors,
    showPassword,
    showConfirmPassword,
    handleChange,
    handleSubmit,
    handleClickShowPassword,
    handleClickShowConfirmPassword
  } = useUserRegForm();

  return (
    <Container maxWidth="sm" sx={classes.container}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={classes.title}
      >
        רישום הורה
      </Typography>

      <form onSubmit={handleSubmit} action="#">
        <TextField
          fullWidth
          margin="normal"
          label="שם משתמש"
          name="name"
          placeholder="הקלידו שם משתמש"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          InputProps={{
            startAdornment: <AccountCircle sx={classes.icon} />,
            autoFocus: true,
            style: { direction: "rtl" },
          }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="סיסמה"
          name="password"
          placeholder=" הקלידו סיסמה"
          type={showPassword ? "text" : "password"}
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
            style: { direction: "rtl" },
          }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="אימות סיסמה"
          name="confirmPassword"
          placeholder=" הקלידו שוב את הסיסמה"
          type={showConfirmPassword ? "text" : "password"}
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
            style: { direction: "rtl" },
          }}
          sx={classes.textField}
        />

        <TextField
          fullWidth
          margin="normal"
          label="אימייל"
          name="email"
          placeholder="הקלידו את כתובת האימייל שלך"
          value={formData.email}
          onChange={handleChange}
          error={emailExists || !!errors.email}
          helperText={emailExists ? "האימייל כבר קיים" : errors.email}
          InputProps={{
            startAdornment: <Email sx={classes.icon} />,
            style: { direction: "rtl" },
          }}
          sx={classes.textField}
        />

        <FormControl
          error={!!errors.agreeToTerms}
          component="fieldset"
          sx={classes.errorText}
        >
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
                  to={PATHS.ForumRules}
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
          {!!errors.agreeToTerms && (
            <FormHelperText>{errors.agreeToTerms}</FormHelperText>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={classes.button}
          fullWidth
        >
          הירשמו לפורום
        </Button>
      </form>
    </Container>
  );
};

export default UserRegPage;