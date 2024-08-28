// src/App.tsx
import React, { useState } from "react";
import Quiz from "./components/quiz/Quiz";
import { Box } from "@mui/material";
import { AuthScreen } from "./components/authScreen";

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    localStorage.setItem("loggedInUser", username); // Сохраняем имя пользователя
    setLoggedInUser(username);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      {loggedInUser ? (
        <Quiz />
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <AuthScreen onLogin={handleLogin} />
        </Box>
      )}
    </Box>
  );
};

export default App;
