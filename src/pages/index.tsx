import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContext';

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level,
      currentExperience,
      challengesCompleted
    }
  }
}
