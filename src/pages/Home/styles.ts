import styled from 'styled-components';

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  padding: 0 2rem 2rem;

  aside {
    display: flex;
    justify-content: center;
    img {
      width: 280px;
    }
  }

  .last-result {
    background: #28bf56;
    color: #fff;
    transition: all 0.3s ease;
    font-size: 0.75rem;
    border-radius: 8px;

    &:hover {
      background: #28bf56;
      filter: brightness(0.86);
    }
  }

  @media (min-width: 350px) {
    aside img {
      width: 300px;
    }
  }

  @media (min-width: 500px) {
    aside img {
      width: 360px;
    }

    .last-result {
      font-size: 0.85rem;
    }
  }

  @media (min-width: 700px) {
    height: 100vh;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    aside img {
      width: 390px;
    }
  }

  @media (min-width: 900px) {
    aside img {
      width: 550px;
    }
  }
`;
