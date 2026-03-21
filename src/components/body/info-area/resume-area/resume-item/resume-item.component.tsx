import { JSX } from 'react';
import * as S from './resume-item.styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props): JSX.Element => {
  return (
    <S.Container>
        <S.Title>{title}</S.Title>
        <S.Value $color={color}>R$ {value}</S.Value>
    </S.Container>
  );
}