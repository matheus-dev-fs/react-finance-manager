import { JSX } from 'react';
import * as S from './month-area.styles';
import { formatCurrentMonth } from '../../../../helpers/date-filter.helper';

type Props = {
    currentMonth: string;
}

export const MonthArea = ({ currentMonth }: Props): JSX.Element => {
  return (
    <S.Container>
         <S.MonthArrow>⬅️</S.MonthArrow>
         <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
         <S.MonthArrow>➡️</S.MonthArrow>
    </S.Container>
  );
}