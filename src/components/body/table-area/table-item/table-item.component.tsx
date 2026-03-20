import { JSX } from 'react';
import * as S from './table-item.styles';
import { IItem } from '../../../../interfaces/item.interface';

type Props = {
    item: IItem;
}

export const TableItem = ({ item }: Props): JSX.Element => {
    return (
        <S.Row>
            <S.Column>{item.date.toLocaleDateString()}</S.Column>
            <S.Column>{item.category}</S.Column>
            <S.Column>{item.title}</S.Column>
            <S.Column>R$ {item.value.toFixed(2)}</S.Column>
        </S.Row>
    );
}