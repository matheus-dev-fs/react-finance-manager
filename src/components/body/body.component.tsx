import { JSX } from 'react';
import * as S from './body.styles';
import { ItemListType } from '../../types/item-list.type';
import { TableArea } from './table-area/table-area.component';
import { InfoArea } from './info-area/info-area-component';

type Props = {
    filteredList: ItemListType;
}

export const Body = ({ filteredList }: Props): JSX.Element => {
    return (
        <S.Container>
            <InfoArea />
            <TableArea filteredList={filteredList} />
        </S.Container>
    );
}