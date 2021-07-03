import styled from 'styled-components';

export const QuestionWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: fit-content;
  background: rgba(248, 248, 248, 0.94);

  padding: 20px 25px;

  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);

  gap: 25px;
  z-index: 10;

  & + article {
    margin-top: 20px;
  }

  section {
    display: flex;
    flex-direction: column;

    gap: 25px;
    div {
      display: flex;
      font-size: 1rem;

      p {
        text-align: center;
        width: 50%;
        color: #72b7e6;
      }
    }

    h3 {
      font-size: 1.1rem;
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

      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

      transition: all 0.3s ease;

      &:hover {
        background: #308dce;
        filter: brightness(0.85);
      }

      & + button {
        margin-top: 10px;
      }

      &:disabled {
        color: #797c82;
        background: #aaa;
      }
    }
  }
`;
