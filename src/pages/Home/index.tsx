import { Button, TextField, Avatar } from '@material-ui/core';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';

import illustrationImg from '../../assets/images/illustration.svg';

import { HomeWrapper } from './styles';

export function Home(): JSX.Element {
  return (
    <HomeWrapper>
      <aside>
        <img src={illustrationImg} alt="Imagem de ilustração" />
      </aside>
      <section>
        <div>
          <Avatar style={{ height: '60px', width: '60px' }}>
            <QuestionAnswerRoundedIcon />
          </Avatar>
          <h1>React Quiz</h1>
          <p>Escolha quantas perguntas deseja responder!</p>
        </div>

        <form onSubmit={event => event.preventDefault()}>
          <TextField variant="outlined" required label="Quantidade" />
          <Button type="submit">Escolher</Button>
        </form>
      </section>
    </HomeWrapper>
  );
}
