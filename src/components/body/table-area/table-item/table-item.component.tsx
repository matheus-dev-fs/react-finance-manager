import { JSX } from 'react';
import * as S from './table-item.styles';
import { IItem } from '../../../../interfaces/item.interface';
import { formatDate } from '../../../../helpers/date-filter.helper';

type Props = {
    item: IItem;
}

export const TableItem = ({ item }: Props): JSX.Element => {
    return (
        <S.Row>
            <S.Column>{formatDate(item.date)}</S.Column>
            <S.Column>{item.category}</S.Column>
            <S.Column>{item.title}</S.Column>
            <S.Column>R$ {item.value}</S.Column>
        </S.Row>
    );
}