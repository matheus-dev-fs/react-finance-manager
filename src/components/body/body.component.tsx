import { JSX } from 'react';
import * as S from './body.styles';
import { ItemListType } from '../../types/item-list.type';
import { TableArea } from './table-area/table-area.component';
import { InfoArea } from './info-area/info-area-component';
import { InsertArea } from './insert-area/insert-area.component';
import { IItem } from '../../interfaces/item.interface';

type Props = {
    filteredList: ItemListType;
    currentMonth: string;
    income: number;
    expense: number;
    onMonthChange: (newMonth: string) => void;
    handleAddItem: (newItem: IItem) => void;
}

export const Body = ({ filteredList, currentMonth, income, expense, onMonthChange, handleAddItem }: Props): JSX.Element => {
    return (
        <S.Container>
            <InfoArea 
                currentMonth={currentMonth} 
                onMonthChange={onMonthChange} 
                income={income} 
                expense={expense} 
            />
            <InsertArea handleAddItem={handleAddItem} />
            <TableArea filteredList={filteredList} />
        </S.Container>
    );
}