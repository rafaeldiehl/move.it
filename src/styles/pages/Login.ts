import styled from 'styled-components';

export const Container = styled.div`
  background-color:  ${props => props.theme.blue};
  background-image: url('/icons/symbol.svg');
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: left center;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    padding: 0 12.5rem;
    justify-content: space-evenly;
    height: 30rem;

    > img {
      width: 22.5rem;
      margin-bottom: 2.75rem;
    }

    strong {
      font-size: 2.25rem;
      color: #ffffff;
      font-weight: 500;
      text-align: left;
    }

    p {
      font-size: 1.25rem;
      color:  ${props => props.theme.textHighlight};
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        margin-right: 1.5rem;
      }

      span {
        width: 250px;
        line-height: 2rem;
      }
    }

    form {
      height: 4.75rem;
      display: flex;
      flex-direction: row;

      input {
        background: linear-gradient(to right, #4953B8, rgba(73,83,184, 20%));
        border: none;
        color:  ${props => props.theme.white};
        font-size: 1.25rem;
        height: 100%;
        padding: 0 1.5rem;

        &::placeholder {
          color:  ${props => props.theme.textHighlight};
        }

        &:valid {
          ~ button {
            background:  ${props => props.theme.green};
          }
        }
      }

      button {
        height: 100%;
        border: none;
        font-size: 0px;
        width: 4.75rem;
        background:  ${props => props.theme.blueDark};
        transition: background .2s;
      }
    }
  }

  @media (max-width: 1050px) {
    background-size: 100%;
    background-position: top center;
    justify-content: center;

    section {
      padding: 0;
      align-items: center;

      > img {
        margin-bottom: 1.5rem;
      }

      p {
        margin-top: -2rem;
        font-size: 1.1rem;

        span {
          width: 100%;
        }
      }

      form {
        input {
          background: linear-gradient(to right, #4953B8, rgba(73,83,184, 20%));
          border: none;
          color:  ${props => props.theme.white};
          font-size: 1.1rem;
          height: 100%;
          padding: 0 1.5rem;
          width: 360px;
        }
      } 
    }
  }

  @media (max-width: 450px) {
    section {
      > img {
        width: 250px;
        margin-bottom: 1.5rem;
      }

      p {
        margin-top: 0;

        span {
          width: 200px;
        }
      }

      form {
        input {
          background: linear-gradient(to right, #4953B8, rgba(73,83,184, 20%));
          border: none;
          color:  ${props => props.theme.white};
          font-size: 1.1rem;
          height: 100%;
          padding: 0 1.5rem;
          width: 200px;
        }
      }
    }
  }
`;