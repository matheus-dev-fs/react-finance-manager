import { JSX } from 'react';
import * as S from './body.styles';
import { ItemListType } from '../../types/item-list.type';
import { TableArea } from './table-area/table-area.component';
import { InfoArea } from './info-area/info-area-component';

type Props = {
    filteredList: ItemListType;
    currentMonth: string;
}

export const Body = ({ filteredList, currentMonth }: Props): JSX.Element => {
    return (
        <S.Container>
            <InfoArea currentMonth={currentMonth} />
            <TableArea filteredList={filteredList} />
        </S.Container>
    );
}