import { JSX } from 'react';
import * as S from './info-area.styles';
import { MonthArea } from './month-area/month-area.component';
import { ResumeArea } from './resume-area/resume-area.component';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

export const InfoArea = ({ currentMonth, onMonthChange }: Props): JSX.Element => {
  return (
    <S.Container>
      <MonthArea currentMonth={currentMonth} onMonthChange={onMonthChange} />
      <ResumeArea />
    </S.Container>
  );
}