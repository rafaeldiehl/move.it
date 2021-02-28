import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import { Container } from '../styles/components/Profile';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://github.com/rafaeldiehl.png" alt="Rafael Diehl"/>
      <div>
        <strong>Rafael Diehl</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </Container>
  );
}