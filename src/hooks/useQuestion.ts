import he from 'he';

import { QuestionProps } from '../contexts/QuestionaryContext';

type ApiQuestionProps = {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export function useQuestion(questions: ApiQuestionProps[]): {
  parsedQuestions: QuestionProps[];
} {
  const parsedQuestions: QuestionProps[] = [];

  questions.forEach(q => {
    const {
      category,
      difficulty,
      correct_answer,
      incorrect_answers,
      question,
    } = q;

    const parsedQuestion = he.decode(question);
    const parsedCorrectAnswer = he.decode(correct_answer);
    const parsedIncorrectAnswers = incorrect_answers.map(i => he.decode(i));

    const options = [parsedCorrectAnswer, ...parsedIncorrectAnswers].sort(
      () => Math.floor(Math.random() * 10) - 5,
    );

    parsedQuestions.push({
      category,
      difficulty,
      question: parsedQuestion,
      correct_answer: parsedCorrectAnswer,
      options,
    });
  });

  return { parsedQuestions };
}
