import styled from 'styled-components';

export const HomeWrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;

  padding: 0 20px;

  gap: 50px;

  aside {
    img {
      width: 600px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: fit-content;
    height: 100%;
    min-width: 300px;
    max-height: 380px;

    background: #f0f0f0f9;

    border: 1px solid #03d3fc;
    border-radius: 8px;

    padding: 20px 25px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;
      gap: 25px;

      .MuiAvatar-circle {
        background: #d4ebfc;
        border: 1px solid #03d3fc;

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
        max-width: 250px;
        font-size: 1.2rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
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
  }
`;
