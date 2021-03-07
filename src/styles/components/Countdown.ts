import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color:  ${props => props.theme.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background:  ${props => props.theme.white};
    box-shadow: 0 0 60px rbga(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid ${props => props.theme.background};
      }

      &:last-child {
        border-right: 1px solid ${props => props.theme.background};
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

    background:  ${props => props.theme.blue};
    color: #ffffff;

    font-size: 1.25rem;
    font-weight: 600;

    transition: background 0.2s;

  > img {
    margin-left: 0.5rem;
  }

  &:not(:disabled):hover {
    background:  ${props => props.theme.blueDark};
  }

  &:disabled {
    background: ${props => props.theme.white};
    color:  ${props => props.theme.text};
    cursor: not-allowed;
    border-bottom: 4px solid  ${props => props.theme.green};

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

  background:  ${props => props.theme.white};
  color:  ${props => props.theme.text};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background 0.2s;

  > img {
    margin-left: 0;
  }

  &:not(:disabled):hover {
    background:  ${props => props.theme.red};
    color: #ffffff;
  }

  &:hover > img {
    filter: brightness(400%);
  }
`;