import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.div`
  width: 75vw;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media (max-height: 700px) {
    section > div {
      margin-bottom: -3rem;
    }
  }

  @media (max-width: 1000px) {
    width: 90vw;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    height: 100vh;
    display: flex;
    flex-direction: column; 
  }

  @media (max-width: 750px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;

      > div {
        width: 86vw;
        max-width: 500px;
        min-width: 300px;

        &:last-child {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;