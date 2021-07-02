import { Button, TextField, Avatar } from '@material-ui/core';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { SectionWrapper } from './styles';

export function SectionElement(): JSX.Element {
  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    history.push('/verification');
  }

  return (
    <SectionWrapper>
      <div>
        <Avatar style={{ height: '60px', width: '60px' }}>
          <QuestionAnswerRoundedIcon />
        </Avatar>
        <h1>React Quiz</h1>
        <p>Escolha quantas perguntas deseja responder!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          variant="outlined"
          required
          label="Quantidade"
        />
        <Button type="submit">Escolher</Button>
      </form>
    </SectionWrapper>
  );
}
