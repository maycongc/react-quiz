import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';

import { AnswerProps } from '../../contexts/QuestionaryContext';
import { useQuestionary } from '../../hooks/useQuestionary';

import { QuestionWrapper } from './styles';

type QuestionProps = {
  category: string;
  difficulty: string;
  questionText: string;
  options: string[];
  index: number;
};

export function Question(props: QuestionProps): JSX.Element {
  const { category, difficulty, options, questionText, index } = props;

  const { answers, setAnswers } = useQuestionary();
  const [newAnswer, setNewAnswer] = useState<AnswerProps>();

  function handleChooseOption(option: string, questionIndex: number) {
    setNewAnswer({ answer: option, questionIndex });
  }

  useEffect(() => {
    if (!newAnswer) return;

    const newValues = [
      ...answers.filter(
        answer => answer.questionIndex !== newAnswer.questionIndex,
      ),
      newAnswer,
    ];

    setAnswers(newValues);
  }, [newAnswer]);

  return (
    <QuestionWrapper>
      <section className="question-info">
        <div>
          <p>
            Category:
            <br />
            <strong>{category}</strong>
          </p>
          <p>
            Difficulty:
            <br />
            <strong>{difficulty}</strong>
          </p>
        </div>

        <h3>{questionText}</h3>
      </section>
      <div className="options">
        {options.map(option => (
          <Button
            key={option}
            onClick={() => handleChooseOption(option, index)}
            disabled={!!newAnswer}
          >
            {option}
          </Button>
        ))}
      </div>
    </QuestionWrapper>
  );
}
