import React from "react";
import { QuestionType } from "../../questionTipes/types";
import { Box, Radio, FormControlLabel, RadioGroup } from "@mui/material";

type QuestionProps = {
  question: QuestionType;
  selectedAnswers?: number;
  onAnswerChange: (questionId: number, answerId: number) => void;
};

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswers,
  onAnswerChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onAnswerChange(question.id, parseInt(event.target.value, 10));
  };

  return (
    <Box>
      <h3>{question.text}</h3>
      <RadioGroup value={selectedAnswers || ""} onChange={handleChange}>
        {question.answers.map((answer) => (
          <FormControlLabel
            key={answer.id}
            value={answer.id}
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#b30000",
                  },
                }}
              />
            }
            label={answer.text}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default Question;
