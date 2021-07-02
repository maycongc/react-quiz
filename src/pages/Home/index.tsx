import { useEffect, useState } from 'react';
import { SectionElement } from '../../components/SectionElement';
import { LoaderAnimation } from '../../components/LoaderAnimation';

import illustrationImg from '../../assets/images/illustration.svg';

import { HomeWrapper } from './styles';

export function Home(): JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <HomeWrapper>
          <aside>
            <img src={illustrationImg} alt="Imagem de ilustração" />
          </aside>
          <SectionElement />
        </HomeWrapper>
      ) : (
        <LoaderAnimation componentDidMount={mounted} />
      )}
    </>
  );
}
