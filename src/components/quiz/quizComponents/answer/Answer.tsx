import React from "react";
import { AnswerType } from "../../questionTipes/types";
import { Box, Radio } from "@mui/material";

type AnswerProps = {
  answer: AnswerType;
  isChecked: boolean;
  onChange: (answerId: number) => void;
};

const Answer: React.FC<AnswerProps> = ({ answer, isChecked, onChange }) => {
  return (
    <Box>
      <Radio checked={isChecked} onChange={() => onChange(answer.id)} />
      {answer.text}
    </Box>
  );
};

export default Answer;
