import styled from 'styled-components';

export const QuestionaryWrapper = styled.main`
  display: flex;
  width: 100%;

  aside {
    position: absolute;
    height: fit-content;

    top: 8rem;
    left: 1rem;

    img {
      width: 60rem;
      position: fixed;
    }
  }

  .questions {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    align-items: center;

    padding: 4rem 2rem;
  }

  .finish {
    width: 10rem;
    height: 5rem;
    margin: 3rem 4rem;

    background: #3be06d;
    color: #f8f8f8;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.2);
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

    font: 500 1.5rem 'Roboto';

    transition: all 0.3s ease;

    &:hover {
      background: #3be06d;
      filter: brightness(0.85);
      transform: scale(1.04);
    }
  }
`;
