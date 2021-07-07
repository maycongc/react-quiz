import styled from 'styled-components';

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 1rem 0 8rem;

  .result-header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 5rem;

    margin: 2rem 0;
    padding: 0 2rem;

    button {
      font: 500 1.4rem 'Roboto';
      width: 11rem;
      height: 4rem;
      align-self: flex-start;
      background: #308dce;
      color: #fff;
      border-radius: 0.8rem;
      transition: all 0.3s ease;

      box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.2);
      text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.25);

      &:hover {
        background: #308dce;
        filter: brightness(0.85);
        transform: scale(1.03);
      }
    }
  }

  aside {
    position: absolute;
    top: 8rem;
    right: 2rem;

    z-index: -1;
    img {
      width: 30rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;

    transition: all 0.3s ease;

    width: 100%;
    max-width: 60rem;

    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    background-color: rgba(243, 243, 243, 0.93);

    padding: 1.3rem 0;
    margin: 0 0 5rem 0;

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      font: 700 1.5rem 'Poppins';
      text-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    }

    div {
      height: fit-content;
      width: 100%;
      padding: 2rem;
    }
  }

  @media (min-width: 450px) {
    aside img {
      width: 35rem;
    }

    section {
      padding: 1.5rem 2rem;
    }
  }

  @media (min-width: 600px) {
    aside img {
      width: 40rem;
    }

    section {
      border-radius: 0.8rem;
    }
  }

  @media (min-width: 640px) {
    section {
      padding: 2.5rem 3rem;
    }
  }

  @media (min-width: 900px) {
    aside img {
      width: 55rem;
    }
  }
`;

type ArticleWrapperProps = {
  isCorrect: boolean;
};

export const ArticleWrapper = styled.article<ArticleWrapperProps>`
  width: 100%;
  height: fit-content;
  border-radius: 0.8rem;
  padding: 2rem 2rem 0.5rem;

  text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

  background: ${p => (p.isCorrect ? '#9BC53D' : '#f53940')};
  color: #fff;
  overflow-wrap: break-word;

  & + article {
    margin-top: 1rem;
  }

  strong {
    display: block;
    min-width: 100%;
    font: 700 1.4rem 'Poppins', sans-serif;
    text-align: justify;
  }

  div {
    display: flex;
    flex-direction: column;
    font: 500 1.3rem 'Roboto', sans-serif;

    .correct-option,
    .answer {
      border-radius: 8px;
      border: 1px solid #fff;
      margin: 0.5rem 0 0 0;
      padding: 0.5rem 8px;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    }

    .correct-option {
      border: 1px solid #f8f8f8;
      color: ${p => (p.isCorrect ? '#fff' : '#81e062')};
    }

    .answer {
      border: 1px solid #f8f8f8;
      color: #ffc5c6;
    }
  }

  @media (min-width: 600px) {
    strong {
      font-size: 1.6rem;
    }

    div {
      font-size: 1.45rem;
    }
  }
`;
