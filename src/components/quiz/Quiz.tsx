// src/components/quiz/Quiz.tsx
import React, { useState, useCallback } from "react";
import { QuestionType } from "./questionTipes/types";
import { initialQuestions } from "./questionData/questionList";
import { Box, Button } from "@mui/material";
import CustomStepper from "./quizComponents/stepper/Stepper";
import Timer from "./quizComponents/timer/Timer";
import { Question } from "./quizComponents/question";
import { ResultsTable } from "./quizComponents/resultsTable";

const Quiz: React.FC = () => {
  const [questions] = useState<QuestionType[]>(initialQuestions);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Map<number, number>>(
    new Map()
  );
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswerChange = (questionId: number, answerId: number) => {
    setSelectedAnswers((prev) => {
      const updated = new Map(prev);
      updated.set(questionId, answerId);
      return updated;
    });
  };

  const handleNext = () => {
    const nextNumber = questionNumber + 1;
    if (nextNumber >= questions.length) {
      setShowResults(true);
      setTimerStop(true);
      saveResults(); // Сохраняем результаты при окончании теста
    } else {
      setQuestionNumber(nextNumber);
    }
  };

  const calculateScore = () => {
    let score = 0;

    questions.forEach((question) => {
      const selectedAnswerId = selectedAnswers.get(question.id);
      if (selectedAnswerId === question.correctAnswerId) {
        score++;
      }
    });

    return score;
  };

  const saveResults = () => {
    const username = localStorage.getItem("loggedInUser");
    if (username) {
      const currentResults = JSON.parse(
        localStorage.getItem("results") || "[]"
      );
      const newResult = {
        username,
        score: calculateScore(),
      };
      localStorage.setItem(
        "results",
        JSON.stringify([...currentResults, newResult])
      );
    }
  };

  const [timerStop, setTimerStop] = useState(false);
  const handleTimeUp = useCallback(() => {
    setShowResults(true);
    setTimerStop(true);
    saveResults();
  }, []);

  return (
    <Box
      sx={{
        marginLeft: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        p: 2,
        width: "70%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ fontSize: "30px", fontWeight: "bold" }}>Тестирование</Box>
        <Timer onTimeUp={handleTimeUp} timerStop={timerStop} />
      </Box>
      <CustomStepper activeStep={questionNumber} steps={questions.length} />
      {!showResults && questions.length > 0 ? (
        <Box>
          <Question
            key={questions[questionNumber].id}
            question={questions[questionNumber]}
            selectedAnswers={
              selectedAnswers.get(questions[questionNumber].id) || undefined
            }
            onAnswerChange={handleAnswerChange}
          />
          <Button
            onClick={handleNext}
            variant="contained"
            sx={{ background: "#b30000", marginTop: "20px" }}
          >
            {questionNumber + 1 < questions.length
              ? "Следующий вопрос"
              : "Показать результаты"}
          </Button>
        </Box>
      ) : (
        <Box>
          <h2>Результаты</h2>
          <p>
            Правильных: {calculateScore()} / {questions.length}
          </p>
          <ResultsTable />
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
