import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { LoaderAnimation } from '../../components/LoaderAnimation';
import { SectionElement } from '../../components/SectionElement';

import { useQuestionary } from '../../hooks/useQuestionary';

import illustration2Img from '../../assets/images/illustration2.svg';

import { VerificationWrapper } from './styles';

export function Verification(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  const { quantity, setQuantity, setQuestions } = useQuestionary();
  const history = useHistory();

  useEffect(() => {
    if (!quantity) history.push('/');

    setMounted(true);
  }, [quantity]);

  function handleCancelButton() {
    setQuantity(undefined);
    setQuestions([]);
    history.push('/');
  }

  return (
    <>
      {mounted ? (
        <VerificationWrapper>
          <SectionElement
            icon="danger"
            title="Atenção"
            description={`Deseja iniciar um questionário com ${quantity} questões?`}
          >
            <div className="buttons">
              <Button>Iniciar</Button>
              <Button onClick={handleCancelButton}>Cancelar</Button>
            </div>
          </SectionElement>
          <aside>
            <img src={illustration2Img} alt="Imagem de ilustração" />
          </aside>
        </VerificationWrapper>
      ) : (
        <LoaderAnimation componentDidMount={mounted} />
      )}
    </>
  );
}
