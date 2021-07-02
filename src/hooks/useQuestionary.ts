import { useContext } from 'react';
import {
  QuestionaryContext,
  QuestionaryContextProps,
} from '../contexts/QuestionaryContext';

export function useQuestionary(): QuestionaryContextProps {
  const value = useContext(QuestionaryContext);

  return value;
}
