import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Toaster } from 'react-hot-toast';

import { toastError } from '../../utils/toasts';

import { LoaderAnimation } from '../../components/LoaderAnimation';
import { Question } from '../../components/Question';

import { useQuestionary } from '../../hooks/useQuestionary';

import illustrationImg from '../../assets/images/illustration3.svg';
import { QuestionaryWrapper } from './styles';

export function Questionary(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  const history = useHistory();
  const { quantity, loaded, answers, questions } = useQuestionary();

  useEffect(() => {
    if (!quantity) history.push('/');
    if (!loaded) return;
    // if (questions.length === 0) history.push('/');

    setMounted(true);
  }, [loaded]);

  function handleFinishQuestionary() {
    if (quantity !== answers.length)
      return toastError('Error! Please answer all questions.');

    answers.sort((a, b) => a.questionIndex - b.questionIndex);

    localStorage.setItem(
      'rq-questionary',
      JSON.stringify({ questions, answers }),
    );

    return history.push('/result');
  }

  return (
    <>
      {mounted ? (
        <QuestionaryWrapper>
          <aside>
            <img src={illustrationImg} alt="Imagem de ilustração" />
          </aside>

          <section className="questions">
            {questions.map((question, index) => {
              return (
                <Question
                  key={question.question}
                  category={question.category}
                  difficulty={question.difficulty}
                  questionText={question.question}
                  options={question.options}
                  index={index}
                />
              );
            })}

            <Button className="finish" onClick={handleFinishQuestionary}>
              Done
            </Button>
          </section>
        </QuestionaryWrapper>
      ) : (
        <LoaderAnimation componentDidMount={mounted} />
      )}
      <Toaster />
    </>
  );
}
