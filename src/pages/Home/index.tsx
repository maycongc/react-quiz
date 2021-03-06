import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { Toaster } from 'react-hot-toast';

import { toastError } from '../../utils/toasts';

import { SectionElement } from '../../components/SectionElement';
import { LoaderAnimation } from '../../components/LoaderAnimation';

import { useQuestionary } from '../../hooks/useQuestionary';

import illustrationImg from '../../assets/images/illustration.svg';

import { HomeWrapper } from './styles';

export function Home(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const [questionsQuantity, setQuestionsQuantity] = useState<number>(0);
  const [hasResult, setHasResult] = useState(false);

  const history = useHistory();
  const { setQuantity, setQuestions, setAnswers } = useQuestionary();

  useEffect(() => {
    const res = localStorage.getItem('rq-questionary');
    if (res) {
      const { answers, questions } = JSON.parse(res);
      setQuestions(questions);
      setAnswers(answers);
      setHasResult(true);
    }

    setMounted(true);
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (questionsQuantity > 0) {
      setQuantity(questionsQuantity);
      setQuestions([]);
      setAnswers([]);
      history.push('/verification');
    } else {
      toastError('Error! Please enter a number above 0.');
    }
  }

  function handleLastResult() {
    history.push('/result');
  }

  if (!mounted) return <LoaderAnimation />;

  return (
    <HomeWrapper>
      <aside>
        <img src={illustrationImg} alt="Imagem de ilustração" />
      </aside>
      <SectionElement
        icon="home"
        title="React Quiz"
        description="Choose how many questions you want to answer!"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            type="number"
            variant="outlined"
            required
            label="Quantity"
            onChange={event => setQuestionsQuantity(Number(event.target.value))}
          />
          <Button type="submit">Select</Button>
        </form>

        {hasResult && (
          <Button className="last-result" onClick={handleLastResult}>
            Your last result
          </Button>
        )}
      </SectionElement>
      <Toaster />
    </HomeWrapper>
  );
}
