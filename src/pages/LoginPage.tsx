import React from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useLoginForm } from "../hooks/useLoginForm";
import * as classes from "../styles/form"
//Login using username and password.
const LoginPage: React.FC = () => {
  const {
    formData,
    errors,
    showPassword,
    handleChange,
    handleSubmit,
    handleClickShowPassword,
  } = useLoginForm();

  return (
    <Container maxWidth="sm" sx={classes.container}>
      <Typography variant="h2" align="center" gutterBottom sx={classes.title}>
        התחברות
      </Typography>
      <form onSubmit={handleSubmit}>
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
          placeholder="הקלידו סיסמה"
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
        {errors.form && (
          <Typography color="error" sx={classes.errorText}>
            {errors.form}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={classes.button}
        >
          התחברו
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;