import { JSX } from 'react';
import * as S from './info-area.styles';
import { MonthArea } from './month-area/month-area.component';
import { ResumeArea } from './resume-area/resume-area.component';

type Props = {
    currentMonth: string;
    income: number;
    expense: number;
    onMonthChange: (newMonth: string) => void;
}

export const InfoArea = ({ currentMonth, income, expense, onMonthChange }: Props): JSX.Element => {
  return (
    <S.Container>
      <MonthArea currentMonth={currentMonth} onMonthChange={onMonthChange} />
      <ResumeArea income={income} expense={expense} />
    </S.Container>
  );
}