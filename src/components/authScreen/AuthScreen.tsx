// src/components/authScreen/AuthScreen.tsx
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
interface User {
  username: string;
  password: string;
}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#b30000", // Цвет границы при фокусе
            },
            "& input": {
              "&:not(:placeholder-shown)": {
                color: "#b30000", // Цвет текста для заполненного поля
                backgroundColor: "rgba(255, 0, 0, 0.1)", // Цвет фона заполненного поля
              },
            },
            "& input::placeholder": {
              color: "transparent", // Прозрачный цвет плейсхолдера для более чистого вида
            },
          },
          "& .MuiInputLabel-root": {
            color: "#b30000", // Цвет метки
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#b30000", // Цвет метки при фокусе
          },
        },
      },
    },
  },
});
export const AuthScreen: React.FC<{ onLogin: (username: string) => void }> = ({
  onLogin,
}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];

    if (isRegistering) {
      if (users.some((user) => user.username === username)) {
        setError("Пользователь с таким никнеймом уже существует.");
        return;
      }
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      setError(null);
      onLogin(username);
    } else {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        setError(null);
        onLogin(username);
      } else {
        setError("Неверное имя пользователя или пароль.");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        {isRegistering ? "Регистрация" : "Вход"}
      </Typography>
      <ThemeProvider theme={theme}>
        <TextField
          label="Никнейм"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </ThemeProvider>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAuth}
        sx={{ mb: 2, background: "#b30000" }}
      >
        {isRegistering ? "Зарегистрироваться" : "Войти"}
      </Button>
      <Box> Гость: user1 user1</Box>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        variant="text"
        onClick={() => setIsRegistering(!isRegistering)}
        sx={{ color: "#b30000" }}
      >
        {isRegistering
          ? "Уже есть аккаунт? Войти"
          : "Нет аккаунта? Зарегистрироваться"}
      </Button>
    </Box>
  );
};
