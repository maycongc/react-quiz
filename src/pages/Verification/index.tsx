import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { LoaderAnimation } from '../../components/LoaderAnimation';
import { SectionElement } from '../../components/SectionElement';

import { useQuestionary } from '../../hooks/useQuestionary';

import { api } from '../../services/api';

import illustrationImg from '../../assets/images/illustration2.svg';
import { VerificationWrapper } from './styles';
import { useQuestion } from '../../hooks/useQuestion';

export function Verification(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  const { quantity, setQuantity, setQuestions, setLoaded } = useQuestionary();

  const history = useHistory();

  useEffect(() => {
    if (!quantity) history.push('/');

    setMounted(true);
  }, [quantity]);

  function handleStartButton() {
    api.get(`api.php?amount=${quantity}`).then(res => {
      const { parsedQuestions } = useQuestion(res.data.results);

      setQuestions(parsedQuestions);
      setLoaded(true);
    });

    history.push('/questionary');
  }

  function handleCancelButton() {
    setQuantity(undefined);
    history.push('/');
  }

  if (!mounted) return <LoaderAnimation />;

  return (
    <VerificationWrapper>
      <SectionElement
        icon="danger"
        title="Attention!"
        description={`Do you want to start a ${quantity}-question quiz?`}
      >
        <div className="buttons">
          <Button onClick={handleStartButton}>Start</Button>
          <Button onClick={handleCancelButton}>Cancel</Button>
        </div>
      </SectionElement>
      <aside>
        <img src={illustrationImg} alt="Imagem de ilustração" />
      </aside>
    </VerificationWrapper>
  );
}
