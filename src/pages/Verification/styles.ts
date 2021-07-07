import styled from 'styled-components';

export const VerificationWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;

  align-items: center;
  justify-content: center;

  padding: 1rem 1rem 2rem;
  gap: 10px;

  aside {
    order: -1;
    img {
      width: 240px;
    }
  }

  section {
    min-height: 370px;

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;

      justify-content: center;

      button {
        background: #808080;
        color: #fff;

        height: 45px;
        padding: 0 15px;

        transition: filter 0.3s ease;

        &:hover {
          filter: brightness(0.85);
        }
      }

      button:first-child {
        background: #28bf56;
      }
    }
  }

  @media (min-width: 400px) {
    aside img {
      width: 300px;
    }
  }

  @media (min-width: 750px) {
    flex-direction: row;
    height: 100vh;
    gap: 30px;

    aside {
      order: +1;
      img {
        width: 350px;
      }
    }
  }

  @media (min-width: 850px) {
    aside img {
      width: 400px;
    }
  }

  @media (min-width: 950px) {
    aside img {
      width: 500px;
    }
  }
`;
