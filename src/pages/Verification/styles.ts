import styled from 'styled-components';

export const VerificationWrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;

  gap: 50px;

  aside {
    img {
      width: 500px;
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
`;
