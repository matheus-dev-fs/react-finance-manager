import { JSX } from 'react';
import * as S from './table-item.styles';
import { IItem } from '../../../../interfaces/item.interface';
import { formatDate } from '../../../../helpers/date-filter.helper';
import { categories } from '../../../../data/categories.data';

type Props = {
    item: IItem;
}

export const TableItem = ({ item }: Props): JSX.Element => {
    return (
        <S.Row>
            <S.Column>{formatDate(item.date)}</S.Column>
            <S.Column>
                <S.Category $backgroudColor={categories[item.category].color}>
                    {categories[item.category].title}
                </S.Category>
            </S.Column>
            <S.Column>{item.title}</S.Column>
            <S.Column>
                <S.Value $expense={categories[item.category].expense}>
                    RS {item.value}
                </S.Value>
            </S.Column>
        </S.Row>
    );
}