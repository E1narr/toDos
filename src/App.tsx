import React from "react";
import Quiz from "./components/quiz/Quiz";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Quiz />
    </Box>
  );
};

export default App;
