import { QuestionType } from '../questionTipes/types';

function shuffleArray<T>(array: T[]): T[] {
    return array
      .map((item) => ({ item, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map(({ item }) => item);
  }

export const initialQuestions: QuestionType[] = shuffleArray([
    {
      id: 1,
      text: "Сколько пальцев показываю?",
      answers: [
        { id: 1, text: "Один" },
        { id: 2, text: "Два" },
        { id: 3, text: "Пять" },
        { id: 4, text: "Я что, вижу что-ли?(Правильный)" },
        { id: 5, text: "Три" },
        { id: 6, text: "Четыре" },
      ],
      correctAnswerId: 4,
    },
    {
      id: 2,
      text: "А голова чтобы ...",
      answers: [
        { id: 1, text: "... есть" },
        { id: 2, text: "... думать(Правильный)" },
        {
          id: 3,
          text: "... осознавать всю тщетность бытия, глядя на бескрайние просторы вселенной и понимая, что мы даже не пылинка относительно всего, что происходило, происходит и произойдет в нашем мире",
        },
        { id: 4, text: "... ЭШКЕРЕЕЕЕЕ(она вам не нужна)" },
      ],
      correctAnswerId: 2,
    },
    {
      id: 3,
      text: "...ноги чтобы ...?",
      answers: [
        { id: 1, text: "... пинать мячик" },
        { id: 2, text: "... ходить(Правильный)" },
        { id: 3, text: "... что такое ноги?" },
        { id: 4, text: "... бегать" },
      ],
      correctAnswerId: 2,
    },
    {
        id: 4,
        text: "Сколько лап у паука?",
        answers: [
          { id: 1, text: "Три с половиной" },
          { id: 2, text: "Восемь(Правильный)" },
          { id: 3, text: "3,14" },
          { id: 4, text: "По одной на каждую сторону" },
        ],
        correctAnswerId: 2,
      },
      {
        id: 5,
        text: "Чай будешь?*",
        answers: [
          { id: 1, text: "Да" },
          { id: 2, text: "ДАА!" },
          { id: 3, text: "ДА, ЧЕРТ ВОЗЬМИ!!!" },
          { id: 4, text: "Может пива?(Правильный)" },
        ],
        correctAnswerId: 4,
      },
      
  ]).map((item) => ({
    ...item,
    answers: shuffleArray(item.answers),
  }));