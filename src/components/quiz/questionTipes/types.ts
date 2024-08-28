
export type AnswerType = {
    id: number;
    text: string;
  };
  
  export type QuestionType = {
    id: number;
    text: string;
    answers: AnswerType[];
    correctAnswerId: number;
  };