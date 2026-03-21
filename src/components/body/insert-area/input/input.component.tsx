import { JSX, ReactNode } from 'react';
import * as S from './input.styles';

type Props = {
    title: string;
    children: ReactNode;
}

export const Input = ({ title, children }: Props): JSX.Element => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            {children}
        </S.Container>
    );
}