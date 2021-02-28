import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import * as S from '../styles/components/ExperienceBar';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
      <S.Container>
          <span>0 xp</span>
          <div>
              <div style={{width: `${percentToNextLevel}%`}} />
              <S.CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
                  {currentExperience} xp
              </S.CurrentExperience>
          </div>
          <span>{experienceToNextLevel} xp</span>
      </S.Container>
  );
}
