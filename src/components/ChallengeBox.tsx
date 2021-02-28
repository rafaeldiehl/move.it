import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import * as S from '../styles/components/ChallengeBox';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  return (
    <S.Container>
      { activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <S.FailedButton 
              type="button"
              onClick={() => {
                resetChallenge(),
                resetCountdown()
              }}
            >
              Falhei
            </S.FailedButton>
            <S.SucceededButton 
              type="button"
              onClick={() => {
                completedChallenge(),
                resetCountdown()
              }}
            >
              Completei
            </S.SucceededButton>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Inicie um ciclo <br /> para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando os desafios.
          </p>
        </S.ChallengeNotActive>
      ) }
    </S.Container>
  )
}