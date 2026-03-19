import { JSX } from 'react';
import * as S from './header.styles';

export const Header = (): JSX.Element => {
    return (
        <S.Container>
            <S.Text>Sistema Financeiro</S.Text>
        </S.Container>
    );
}