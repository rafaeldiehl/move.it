import { useRouter } from 'next/router';

import Head from 'next/head';

import { Container } from '../styles/pages/Login';

export default function Login() {  
  const router = useRouter();

  function handleGoToUser() {
    router.push('/')
  }

  return (
    <Container>
      <Head>
          <title>Login | move.it</title>
      </Head>
      <section>
        <img src="icons/logo.svg" alt="Logo"/>
        <header>
          <strong>Bem-vindo</strong>
        </header>
        <p>
          <img src="icons/github.svg" alt="Github"/>
          <span>Faça login com seu Github para começar</span>
        </p>
        <form>
          <input required type="text" placeholder="Digite seu username"/>
          <button type="submit" onClick={handleGoToUser}><img src="icons/login_arrow.svg" alt="Avançar"/></button>
        </form>
      </section>
    </Container>
  );
}