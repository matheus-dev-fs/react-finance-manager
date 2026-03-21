import { JSX } from 'react';
import * as S from './body.styles';
import { ItemListType } from '../../types/item-list.type';
import { TableArea } from './table-area/table-area.component';
import { InfoArea } from './info-area/info-area-component';

type Props = {
    filteredList: ItemListType;
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

export const Body = ({ filteredList, currentMonth, onMonthChange }: Props): JSX.Element => {
    return (
        <S.Container>
            <InfoArea currentMonth={currentMonth} onMonthChange={onMonthChange} />
            <TableArea filteredList={filteredList} />
        </S.Container>
    );
}