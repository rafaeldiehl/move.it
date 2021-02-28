import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

export default function Login() {  
  return (
    <div className={styles.container}>
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
          Faça login com seu Github <br /> para começar
        </p>
        <form>
          <input required type="text" placeholder="Digite seu username"/>
          <button type="submit"><img src="icons/login_arrow.svg" alt="Avançar"/></button>
        </form>
      </section>
    </div>
  );
}