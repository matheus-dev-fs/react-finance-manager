import { JSX } from 'react';
import { GlobalStyle } from './Global.styles';
import * as S from './App.style';

const App = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <S.Container>
                <h1>Finance Manager</h1>
            </S.Container>
        </>
    );
};

export default App;