import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rbga(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-right: 1px solid #f0f1f3;
      }
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: var(--blue);
    color: var(--white);

    font-size: 1.25rem;
    font-weight: 600;

    transition: background 0.2s;

  > img {
    margin-left: 0.5rem;
  }

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  &:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
    border-bottom: 4px solid var(--green);

    > img {
      margin-left: 1rem;
    }
  }
`;

export const CountdownButtonActive = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: var(--white);
  color: var(--text);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background 0.2s;

  > img {
    margin-left: 0;
  }

  &:not(:disabled):hover {
    background: var(--red);
    color: var(--white);
  }

  &:hover > img {
    filter: brightness(400%);
  }
`;