import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { LoaderAnimation } from '../../components/LoaderAnimation';
import { Question } from '../../components/Question';

import { useQuestionary } from '../../hooks/useQuestionary';

import illustrationImg from '../../assets/images/illustration3.svg';
import { QuestionaryWrapper } from './styles';

export function Questionary(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  const history = useHistory();
  const { quantity, questions, loaded, answers } = useQuestionary();

  useEffect(() => {
    if (!quantity) history.push('/');
    if (!loaded) return;
    if (questions.length === 0) history.push('/');

    setMounted(true);
  }, [loaded]);

  function handleFinishQuestionary() {
    if (quantity !== answers.length) return;

    answers.sort((a, b) => a.questionIndex - b.questionIndex);

    localStorage.setItem(
      'rq-questionary',
      JSON.stringify({ questions, answers }),
    );

    history.push('/result');
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
              const options = [
                question.correct_answer,
                ...question.incorrect_answers,
              ].sort(() => Math.floor(Math.random() * 10) - 5);

              // console.log(question.correct_answer);
              // console.log(question.incorrect_answers);
              // console.log(questions);

              return (
                <Question
                  key={question.question}
                  category={question.category}
                  difficulty={question.difficulty}
                  questionText={question.question}
                  options={options}
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
    </>
  );
}
