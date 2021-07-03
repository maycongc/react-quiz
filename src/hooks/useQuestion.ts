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

    const options = [correct_answer, ...incorrect_answers].sort(
      () => Math.floor(Math.random() * 10) - 5,
    );

    parsedQuestions.push({
      category,
      difficulty,
      question,
      correct_answer,
      options,
    });
  });

  return { parsedQuestions };
}
