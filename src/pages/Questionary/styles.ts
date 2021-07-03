import styled from 'styled-components';

export const QuestionaryWrapper = styled.main`
  display: flex;
  width: 100%;

  aside {
    position: absolute;
    height: fit-content;

    top: 80px;
    left: 10px;

    img {
      width: 600px;
      position: fixed;
    }
  }

  .questions {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    align-items: center;

    padding: 40px 20px;
  }

  .finish {
    width: 100px;
    height: 50px;
    margin: 30px 40px;
    background: #3be06d;
    color: #f8f8f8;
    font: 500 1rem 'Roboto';

    transition: all 0.3s ease;

    &:hover {
      background: #3be06d;
      filter: brightness(0.85);
    }
  }
`;
