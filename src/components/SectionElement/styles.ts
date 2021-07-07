import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: fit-content;
  height: fit-content;
  width: 100%;
  max-width: 30rem;

  background: #f0f0f0f9;

  border: 1px solid #03d3fc;
  border-radius: 0.8rem;

  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);

  padding: 2rem 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    column-gap: 1.5rem;
    row-gap: 2.5rem;

    .MuiAvatar-circle {
      background: #d4ebfc;
      border: 1px solid #03d3fc;
      margin-top: 1rem;

      svg {
        width: 4rem;
        height: 4rem;
        fill: #69a7f5;
      }
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      width: 100%;
      max-width: 20rem;
      font-size: 1.6rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
    gap: 2rem;

    div label {
      font-size: 1.35rem;
    }

    input {
      height: 5rem;
      width: 15rem;
      border-radius: 0.8rem;
      padding: 0 1.5rem;
    }

    button {
      height: 4rem;
      background: #03d3fc;
      border: 1px solid #03d3fc;

      font: 500 1.28rem 'Roboto';
      color: #f8f8f8;

      padding: 0 1.6rem;
      border-radius: 0.8rem;

      transition: all 0.3s ease;

      &:hover {
        background: #03d3fc;
        filter: brightness(0.85);
        transform: scale(1.03);
      }
    }
  }

  @media (min-width: 375px) {
    div {
      h1 {
        font-size: 2.8rem;
      }

      p {
        font-size: 1.76rem;
      }
    }

    form button {
      font: 500 1.44rem 'Roboto';
    }
  }

  @media (min-width: 700px) {
    min-width: 28rem;

    form div label {
      font-size: 1.5rem;
    }
  }
`;
