import styled from 'styled-components';

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 10px 0 80px;

  .result-header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 50px;

    margin: 20px 0;
    padding: 0 20px;

    button {
      font: 500 0.9rem 'Roboto';
      width: 110px;
      height: 40px;
      align-self: flex-start;
      background: #308dce;
      color: #fff;

      transition: all 0.3s ease;

      &:hover {
        background: #308dce;
        filter: brightness(0.85);
      }
    }
  }

  aside {
    position: absolute;
    top: 80px;
    right: 20px;

    z-index: -1;
    img {
      width: 600px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;

    transition: all 0.3s ease;

    width: 600px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    background-color: rgba(243, 243, 243, 0.93);

    padding: 25px 30px;
    margin: 0 0 50px 0;
    border-radius: 8px;

    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      font: 700 1.4rem 'Poppins';
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }

    div {
      height: fit-content;
      margin: 20px;
    }
  }
`;

type ArticleWrapperProps = {
  isCorrect: boolean;
};

export const ArticleWrapper = styled.article<ArticleWrapperProps>`
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  font: 500 0.95rem 'Poppins';
  overflow-wrap: break-word;

  padding: 20px 20px 5px 20px;

  text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background: ${p => (p.isCorrect ? '#9BC53D' : '#f53940')};
  color: #fff;

  & + article {
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    font: 500 0.9rem 'Roboto';

    .correct-option,
    .answer {
      border-radius: 8px;
      border: 1px solid #fff;
      margin: 5px 0 0 0;
      padding: 5px 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }

    .correct-option {
      border: 1px solid #f8f8f8;
      color: ${p => (p.isCorrect ? '#fff' : '#81e062')};
    }

    .answer {
      border: 1px solid #f8f8f8;
      color: #6f0a0d;
    }
  }
`;
