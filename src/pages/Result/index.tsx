import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { LoaderAnimation } from '../../components/LoaderAnimation';

import { useQuestionary } from '../../hooks/useQuestionary';

import illustrationImg from '../../assets/images/illustration4.svg';
import { ResultWrapper, ArticleWrapper } from './styles';

export function Result(): JSX.Element {
  const {
    questions,
    answers,
    setQuestions,
    setAnswers,
    setQuantity,
    setLoaded,
  } = useQuestionary();
  const history = useHistory();

  const [result, setResult] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (questions.length === 0 || answers.length === 0) history.push('/');

    let total = 0;

    answers.forEach(a => {
      const { answer, questionIndex } = a;
      const { correct_answer } = questions[questionIndex];

      if (correct_answer === answer) total += 1;
    });

    setResult(total);

    return setMounted(true);
  }, []);

  function handleBackToHome() {
    setAnswers([]);
    setQuestions([]);
    setQuantity(undefined);
    setLoaded(false);
    history.push('/');
  }

  if (!mounted) return <LoaderAnimation />;

  return (
    <ResultWrapper>
      <header className="result-header">
        <Button onClick={handleBackToHome}>home page</Button>
      </header>
      <aside>
        <img src={illustrationImg} alt="" />
      </aside>
      <section>
        <h3>
          Result: ({`${result}/${answers.length}`}){' - '}
          {`${Math.round((result / answers.length) * 100)}% correct.`}
        </h3>
        <div>
          {answers.map(a => {
            const { answer, questionIndex } = a;
            const { question, correct_answer } = questions[questionIndex];

            const isCorrect = correct_answer === answer;

            return (
              <ArticleWrapper
                key={questionIndex}
                className="report-question"
                isCorrect={isCorrect}
              >
                <strong>{question}</strong>
                <div>
                  <p>Correct answer:</p>
                  <div className="correct-option">
                    <p>{correct_answer}</p>
                  </div>
                </div>
                {!isCorrect && (
                  <div>
                    <p>Your answer:</p>
                    <div className="answer">
                      <p>{answer}</p>
                    </div>
                  </div>
                )}
              </ArticleWrapper>
            );
          })}
        </div>
      </section>
    </ResultWrapper>
  );
}
