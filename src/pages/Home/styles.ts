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

  .last-result {
    background: #28bf56;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background: #28bf56;
      filter: brightness(0.86);
    }
  }
`;
