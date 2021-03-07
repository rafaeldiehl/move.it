import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: ${props => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  header {
    margin-top: 0.15rem;
  }
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
      width: 50px;
    }
  }

  @media (max-width: 750px) {
    strong {
      margin-top: 1.5rem;
    }
    
    p {
      max-width: 90%;
      margin-top: 1.5rem;
      margin-bottom: 1rem;

      img {
        margin-bottom: 1rem;
        width: 60px;
      }
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  margin-bottom: 0.25rem;

  header {
    color: ${props => props.theme.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${props => props.theme.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${props => props.theme.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      color: ${props => props.theme.white};
      font-size: 1rem;
      font-weight: 600;

      transition: background 0.3s;
    }
  }

  @media (max-width: 750px) {
    main {
      img {
       margin-top: 2rem;
      }

      p {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const FailedButton = styled.button`
  background:  ${props => props.theme.red};

  &:hover {
    background: #C5364D;
  }
`;

export const SucceededButton = styled.button`
  background:  ${props => props.theme.green};

  &:hover {
    background: #41B625;
  }
`;