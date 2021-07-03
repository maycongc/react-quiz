import { useQuestionary } from './useQuestionary';

export type ParsedQuestionsProps = {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  options: string[];
};

export function useQuestion(): {
  parsedQuestions: ParsedQuestionsProps[];
} {
  const { questions } = useQuestionary();
  const parsedQuestions: ParsedQuestionsProps[] = [];

  for (let i = 0; i < questions.length; i += 1) {
    const {
      category,
      difficulty,
      correct_answer,
      incorrect_answers,
      question,
    } = questions[i];

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
  }

  return {
    parsedQuestions,
  };
}
