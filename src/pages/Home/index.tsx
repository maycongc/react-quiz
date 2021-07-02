import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import { SectionElement } from '../../components/SectionElement';
import { LoaderAnimation } from '../../components/LoaderAnimation';

import { useQuestionary } from '../../hooks/useQuestionary';

import illustrationImg from '../../assets/images/illustration.svg';

import { HomeWrapper } from './styles';

export function Home(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const [questionsQuantity, setQuestionsQuantity] = useState<number>(0);

  const history = useHistory();
  const { setQuantity } = useQuestionary();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setQuantity(questionsQuantity);

    history.push('/verification');
  }

  return (
    <>
      {mounted ? (
        <HomeWrapper>
          <aside>
            <img src={illustrationImg} alt="Imagem de ilustração" />
          </aside>
          <SectionElement
            icon="home"
            title="React Quiz"
            description="Escolha quantas perguntas deseja responder!"
          >
            <form onSubmit={handleSubmit}>
              <TextField
                type="number"
                variant="outlined"
                required
                label="Quantidade"
                onChange={event =>
                  setQuestionsQuantity(Number(event.target.value))
                }
                value={questionsQuantity}
              />
              <Button type="submit">Escolher</Button>
            </form>
          </SectionElement>
        </HomeWrapper>
      ) : (
        <LoaderAnimation componentDidMount={mounted} />
      )}
    </>
  );
}
