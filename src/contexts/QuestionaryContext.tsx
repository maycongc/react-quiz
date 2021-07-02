import {
  useEffect,
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { api } from '../services/api';

type QuestionsProps = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionaryContextProps = {
  questions: QuestionsProps[];
  setQuestions: Dispatch<SetStateAction<QuestionsProps[]>>;
  quantity: number | undefined;
  setQuantity: Dispatch<SetStateAction<number | undefined>>;
};

type QuestionContextProviderProps = {
  children: ReactNode;
};

export const QuestionaryContext = createContext({} as QuestionaryContextProps);

export function QuestionaryContextProvider({
  children,
}: QuestionContextProviderProps): JSX.Element {
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [quantity, setQuantity] = useState<number>();

  useEffect(() => {
    if (quantity === undefined) return;

    api.get(`api.php?amount=${quantity}`).then(res => {
      setQuestions(res.data.results);
    });
  }, [quantity]);

  return (
    <QuestionaryContext.Provider
      value={{ questions, setQuestions, quantity, setQuantity }}
    >
      {children}
    </QuestionaryContext.Provider>
  );
}
