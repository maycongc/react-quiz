import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: fit-content;
  height: fit-content;
  min-width: 300px;

  background: #f0f0f0f9;

  border: 1px solid #03d3fc;
  border-radius: 8px;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);

  padding: 20px 25px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    column-gap: 15px;
    row-gap: 25px;

    .MuiAvatar-circle {
      background: #d4ebfc;
      border: 1px solid #03d3fc;
      margin-top: 10px;

      svg {
        width: 40px;
        height: 40px;
        fill: #69a7f5;
      }
    }

    h1 {
      font-size: 2.1rem;
    }

    p {
      width: 100%;
      max-width: 200px;
      font-size: 1.2rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    gap: 20px;

    input {
      height: 50px;
      width: 150px;
      border-radius: 8px;
      padding: 0 15px;
    }

    button {
      height: 40px;
      background: #03d3fc;
      border: 1px solid #03d3fc;

      font: 500 1rem 'Roboto';
      color: #f8f8f8;

      border-radius: 8px;

      transition: filter 0.3s ease;

      &:hover {
        background: #03d3fc;
        filter: brightness(0.85);
      }
    }
  }
`;
