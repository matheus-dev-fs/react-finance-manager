import { JSX } from 'react';
import * as S from './info-area.styles';
import { MonthArea } from './month-area/month-area.component';
import { ResumeArea } from './resume-area/resume-area.component';

type Props = {
    currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props): JSX.Element => {
  return (
    <S.Container>
      <MonthArea currentMonth={currentMonth} />
      <ResumeArea />
    </S.Container>
  );
}