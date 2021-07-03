import { Button } from '@material-ui/core';
import { useState } from 'react';

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
  const [answered, setAnswered] = useState(false);

  function handleChooseOption(option: string, questionIndex: number) {
    const newValues = [
      ...answers.filter(answer => answer.questionIndex !== questionIndex),
      { answer: option, questionIndex },
    ];

    setAnswers(newValues);
    setAnswered(true);
  }

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
            disabled={answered}
          >
            {option}
          </Button>
        ))}
      </div>
    </QuestionWrapper>
  );
}
