import { JSX } from 'react';
import * as S from './body.styles';
import { ItemListType } from '../../types/item-list.type';
import { TableArea } from './table-area/table-area.component';
import { InfoArea } from './info-area/info-area-component';

type Props = {
    filteredList: ItemListType;
    currentMonth: string;
    income: number;
    expense: number;
    onMonthChange: (newMonth: string) => void;
}

export const Body = ({ filteredList, currentMonth, income, expense, onMonthChange }: Props): JSX.Element => {
    return (
        <S.Container>
            <InfoArea 
                currentMonth={currentMonth} 
                onMonthChange={onMonthChange} 
                income={income} 
                expense={expense} 
            />
            <TableArea filteredList={filteredList} />
        </S.Container>
    );
}