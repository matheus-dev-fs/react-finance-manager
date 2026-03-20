import { JSX } from 'react';
import * as S from './table-area.styles';
import { ItemListType } from '../../../types/item-list.type';
import { IItem } from '../../../interfaces/item.interface';
import { TableItem } from './table-item/table-item.component';

type Props = {
    filteredList: ItemListType;
}

export const TableArea = ({ filteredList }: Props): JSX.Element => {
    return (
        <S.Table>
            <thead>
                <tr>
                    <S.TableHeadColumn $width='100'>Data</S.TableHeadColumn>
                    <S.TableHeadColumn $width='130'>Categoria</S.TableHeadColumn>
                    <S.TableHeadColumn>Título</S.TableHeadColumn>
                    <S.TableHeadColumn $width='150'>Valor</S.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item: IItem): JSX.Element => (
                    <TableItem key={item.id} item={item} />
                ))}
            </tbody>
        </S.Table>
    );
}