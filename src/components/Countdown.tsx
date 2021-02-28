import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import * as S from '../styles/components/Countdown';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <S.Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.Container>

      { hasFinished ? (
        <S.CountdownButton
          disabled
          type="button" 
        >
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="Encerrou"/>
        </S.CountdownButton>
      ) : (
        <>
          { isActive ? (
            <S.CountdownButtonActive
              type="button" 
              onClick={resetCountdown}
            >
            Abandonar ciclo
            <img src="icons/close.svg" alt="Fechar" />
            </S.CountdownButtonActive>
          ) : (
            <S.CountdownButton 
              type="button" 
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/play_arrow.svg" alt="Iniciar" />
            </S.CountdownButton>
          ) }
        </>
      ) }

      
    </div>
  );
}
