import { Dispatch, JSX, SetStateAction, useEffect, useState } from 'react';
import { GlobalStyle } from './Global.styles';
import * as S from './App.style';
import { Header } from './components/header/header.component';
import { Body } from './components/body/body.component';
import { ItemListType } from './types/item-list.type';
import { items } from './data/items.data';
import { filterListByMonth, getCurrentMonth } from './helpers/date-filter.helper';

const App = (): JSX.Element => {
    const [list, setList]: [
        ItemListType,
        Dispatch<SetStateAction<ItemListType>>,
    ] = useState<ItemListType>(items);

    const [filteredList, setFilteredList]: [
        ItemListType,
        Dispatch<SetStateAction<ItemListType>>,
    ] = useState<ItemListType>([]);

    const [currentMonth, setCurrentMonth]: [
        string,
        Dispatch<SetStateAction<string>>,
    ] = useState<string>(getCurrentMonth());

    useEffect((): void => {
        setFilteredList((prev: ItemListType): ItemListType => filterListByMonth(list, currentMonth));
    }, [list, currentMonth]);

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