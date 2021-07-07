import styled from 'styled-components';

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  padding: 0 3.2rem 3.2rem;

  aside {
    display: flex;
    justify-content: center;
    img {
      width: 28rem;
    }
  }

  .last-result {
    background: #28bf56;
    color: #fff;
    transition: all 0.3s ease;
    font-size: 1.2rem;
    border-radius: 0.8rem;

    &:hover {
      background: #28bf56;
      filter: brightness(0.86);
    }
  }

  @media (min-width: 350px) {
    aside img {
      width: 30rem;
    }
  }

  @media (min-width: 500px) {
    aside img {
      width: 36rem;
    }

    .last-result {
      font-size: 1.35rem;
    }
  }

  @media (min-width: 700px) {
    height: 100vh;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    aside img {
      width: 39rem;
    }
  }

  @media (min-width: 900px) {
    aside img {
      width: 55rem;
    }
  }
`;
