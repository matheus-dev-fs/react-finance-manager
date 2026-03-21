import { JSX } from 'react';
import * as S from './month-area.styles';

export const MonthArea = (): JSX.Element => {
  return (
    <S.Container>
         <S.MonthArrow>⬅️</S.MonthArrow>
         <S.MonthTitle>Janeiro 2024</S.MonthTitle>
         <S.MonthArrow>➡️</S.MonthArrow>
    </S.Container>
  );
}