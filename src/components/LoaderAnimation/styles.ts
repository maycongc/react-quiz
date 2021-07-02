import styled from 'styled-components';

type LoadingProps = {
  componentDidMount: boolean;
};

export const LoadingWrapper = styled.div<LoadingProps>`
  display: ${p => (p.componentDidMount ? 'none' : 'flex')};
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  z-index: 10;

  div {
    animation: spin 0.7s linear infinite;
    border: 10px solid #a3a3a3;
    border-top: 10px solid #03d3fc;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(720deg);
      }
    }
  }
`;
