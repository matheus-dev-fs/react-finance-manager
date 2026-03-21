import { Dispatch, JSX, SetStateAction, useEffect, useState } from 'react';
import { GlobalStyle } from './Global.styles';
import * as S from './App.style';
import { Header } from './components/header/header.component';
import { Body } from './components/body/body.component';
import { ItemListType } from './types/item-list.type';
import { items } from './data/items.data';
import { filterListByMonth, getCurrentMonth } from './helpers/date-filter.helper';
import { IItem } from './interfaces/item.interface';
import { categories } from './data/categories.data';

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

    const [income, setIncome]: [
        number,
        Dispatch<SetStateAction<number>>,
    ] = useState<number>(0);

    const [expense, setExpense]: [
        number,
        Dispatch<SetStateAction<number>>,
    ] = useState<number>(0);

    useEffect((): void => {
        setFilteredList((prev: ItemListType): ItemListType => filterListByMonth(list, currentMonth));
    }, [list, currentMonth]);

    useEffect((): void => {
        const totalIncome: number = filteredList
            .filter((item: IItem): boolean => categories[item.category].expense === false)
            .reduce((sum: number, item: IItem): number => sum + item.value, 0);

        const totalExpense: number = filteredList
            .filter((item: IItem): boolean => categories[item.category].expense === true)
            .reduce((sum: number, item: IItem): number => sum + item.value, 0);

        setIncome(totalIncome);
        setExpense(totalExpense);
    }, [filteredList]);

    const handleMonthChange = (newMonth: string): void => {
        setCurrentMonth(newMonth);
    }

    return (
        <>
            <GlobalStyle />
            <S.Container>
                <Header />
                <Body 
                    filteredList={filteredList} 
                    currentMonth={currentMonth} 
                    income={income} 
                    expense={expense}
                    onMonthChange={handleMonthChange}
                />
            </S.Container>
        </>
    );
};

export default App;