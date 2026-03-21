import { JSX } from 'react';
import * as S from './info-area.styles';
import { MonthArea } from './month-area/month-area.component';
import { ResumeArea } from './resume-area/resume-area.component';

export const InfoArea = (): JSX.Element => {
  return (
    <S.Container>
      <MonthArea />
      <ResumeArea />
    </S.Container>
  );
}