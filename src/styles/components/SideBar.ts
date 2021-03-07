import styled from 'styled-components';

export const Container = styled.div`
  background:  ${props => props.theme.white};
  width: 7rem;
  display: flex;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    position: relative;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 90%;

      .buttons {
        display: flex;
        flex-direction: column;
      }
    }

    header img {
      width: 2.5rem;
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    position: fixed;
    background:  ${props => props.theme.white};
    width: 100%;
    display: flex;
    justify-content: start;

    section {
      flex-direction: row;
      height: 5rem;
      width: 100vw;
      align-items: center;
      justify-content: center;
      margin-left: 0;
      margin-top: 0.5rem;

      > div {
        flex-direction: row;
        height: 100%;
        width: 90%;

        .buttons {
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

export const Link = styled.div`
  width: 7rem;
  height: 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    > svg g {
      opacity: 1;
    }

    > svg path {
      stroke:  ${props => props.theme.blueDark};
    }
  }

  @media (max-width: 1000px) {
    width: 7rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

export const ActiveLink = styled.div`
  width: 7rem;
  height: 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  cursor: not-allowed;
  position: relative;

  &:before {
    content: '';
    width: 0.3rem;
    height: 3.75rem;
    border-radius: 0 15px 15px 0;
    background:  ${props => props.theme.blueDark};
    position: absolute;
    left: 0;
  }

  svg  {
    g {
      opacity: 1;
    }

    path {
      stroke:  ${props => props.theme.blueDark};
    }
  }

  @media (max-width: 1000px) {
    width: 7rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &:before {
      content: '';
      height: 0.3rem;
      width: 5rem;
      border-radius: 0 15px 15px 0;
      background:  ${props => props.theme.blueDark};
      position: absolute;
      left: auto;
      bottom: -0.5rem;
    }
  }
`;