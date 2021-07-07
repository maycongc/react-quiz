import styled from 'styled-components';

export const QuestionWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  height: fit-content;
  background: rgba(248, 248, 248, 0.94);

  padding: 2rem 2.5rem;

  border-radius: 0.8rem;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);

  gap: 2.5rem;
  z-index: 10;

  & + article {
    margin-top: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;

    gap: 2rem;
    div {
      display: flex;
      font-size: 1.52rem;

      p {
        text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 50%;
        color: #72b7e6;
      }
    }

    h3 {
      font-size: 1.52rem;
      text-align: justify;
      color: #37576d;
      overflow-wrap: break-word;
    }
  }

  div {
    display: block;

    button {
      width: 100%;

      background: #308dce;
      color: #fff;
      font-size: 1.25rem;

      box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.4);

      transition: all 0.3s ease;

      &:hover {
        background: #308dce;
        filter: brightness(0.85);
        transform: scale(1.03);
      }

      & + button {
        margin-top: 1rem;
      }

      &:disabled {
        color: #797c82;
        background: #aaa;
      }
    }
  }

  @media (min-width: 500px) {
    section {
      div {
        font-size: 1.6rem;
      }

      h3 {
        font-size: 1.75rem;
      }
    }

    div button {
      font-size: 1.4rem;
    }
  }
`;
