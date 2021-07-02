import { ReactNode } from 'react';
import { Avatar } from '@material-ui/core';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';

import { SectionWrapper } from './styles';

type SectionElementProps = {
  icon: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionElement(props: SectionElementProps): JSX.Element {
  const { icon, title, description, children } = props;

  return (
    <SectionWrapper>
      <div>
        <Avatar style={{ height: '60px', width: '60px' }}>
          {icon === 'home' ? (
            <QuestionAnswerRoundedIcon />
          ) : (
            <ErrorRoundedIcon />
          )}
        </Avatar>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </SectionWrapper>
  );
}
