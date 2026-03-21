import { JSX } from 'react';
import * as S from './resume-item.styles';

type Props = {
    title: string;
    value: number;
}

export const ResumeItem = ({ title, value }: Props): JSX.Element => {
  return (
    <S.Container>
        <S.Title>{title}</S.Title>
        <S.Value>R$ {value}</S.Value>
    </S.Container>
  );
}