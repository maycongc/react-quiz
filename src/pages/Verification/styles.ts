import styled from 'styled-components';

export const VerificationWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;

  align-items: center;
  justify-content: center;

  padding: 1.6rem 1.6rem 3.2rem;
  gap: 1rem;

  aside {
    order: -1;
    img {
      width: 24rem;
    }
  }

  section {
    min-height: 37rem;

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;

      justify-content: center;

      button {
        background: #808080;
        color: #fff;
        font-size: 1.3rem;

        height: 4.5rem;
        padding: 0 1.5rem;

        transition: all 0.3s ease;

        &:hover {
          filter: brightness(0.85);
          transform: scale(1.03);
        }
      }

      button:first-child {
        background: #28bf56;
      }
    }
  }

  @media (min-width: 400px) {
    aside img {
      width: 30rem;
    }
  }

  @media (min-width: 750px) {
    flex-direction: row;
    height: 100vh;
    gap: 3rem;

    aside {
      order: +1;
      img {
        width: 35rem;
      }
    }

    button {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 850px) {
    aside img {
      width: 40rem;
    }
  }

  @media (min-width: 950px) {
    aside img {
      width: 50rem;
    }
  }
`;
