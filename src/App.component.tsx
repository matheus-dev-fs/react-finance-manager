import { JSX } from 'react';
import { GlobalStyle } from './Global.styles';
import * as S from './App.style';
import { Header } from './components/header/header.component';
import { Body } from './components/body/body.component';

const App = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <S.Container>
                <Header />
                <Body />
            </S.Container>
        </>
    );
};

export default App;