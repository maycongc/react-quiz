import {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

type QuestionProps = {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionaryContextProps = {
  questions: QuestionProps[];
  setQuestions: Dispatch<SetStateAction<QuestionProps[]>>;

  quantity: number | undefined;
  setQuantity: Dispatch<SetStateAction<number | undefined>>;

  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;

  answers: AnswerProps[];
  setAnswers: Dispatch<SetStateAction<AnswerProps[]>>;
};

type AnswerProps = {
  answer: string;
  questionIndex: number;
};

type QuestionContextProviderProps = {
  children: ReactNode;
};

export const QuestionaryContext = createContext({} as QuestionaryContextProps);

export function QuestionaryContextProvider({
  children,
}: QuestionContextProviderProps): JSX.Element {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [quantity, setQuantity] = useState<number>();
  const [loaded, setLoaded] = useState(false);
  const [answers, setAnswers] = useState<AnswerProps[]>([]);

  return (
    <QuestionaryContext.Provider
      value={{
        questions,
        setQuestions,
        quantity,
        setQuantity,
        loaded,
        setLoaded,
        answers,
        setAnswers,
      }}
    >
      {children}
    </QuestionaryContext.Provider>
  );
}
