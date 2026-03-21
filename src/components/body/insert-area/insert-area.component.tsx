import { ChangeEvent, JSX, useState } from 'react';
import * as S from './insert-area.styles';
import { Input } from './input/input.component';
import { categories } from '../../../data/categories.data';
import { IItem } from '../../../interfaces/item.interface';
import { v4 } from 'uuid';

type Props = {
    handleAddItem: (newItem: IItem) => void;
}

export const InsertArea = ({ handleAddItem }: Props): JSX.Element => {
    const [date, setDate] = useState<Date | null>(null);
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setDate(new Date(event.target.value));
    }

    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        const value: string = event.target.value;

        if (!value) {
            return;
        }

        setCategory(value);
    }

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value.trim();
        setTitle(value);
    }

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value.trim();

        if (isNaN(Number(value))) {
            setValue('');
            return;
        }

        setValue(value);
    }

    const handleAddButtonClick = (): void => {
        if (!date || !category || !title || !value) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        if (Number(value) <= 0) {
            alert('O valor deve ser positivo.');
            return;
        }

        const newItem: IItem = {
            id: v4(),
            date,
            category,
            title,
            value: Number(value),
        };

        handleAddItem(newItem);
        setDate(null);
        setCategory('');
        setTitle('');
        setValue('');
    }

    return (
        <S.Container>
            <Input title="Data">
                <S.Input
                    type="date"
                    onChange={handleDateChange}
                    value={date ? date.toISOString().split('T')[0] : ''}
                    max={new Date().toISOString().split('T')[0]}
                />
            </Input>
            <Input title="Categoria">
                <S.Input as="select" onChange={handleCategoryChange} value={category}>
                    <option value="">Selecione</option>
                    {Object
                        .keys(categories)
                        .map((key: string): JSX.Element => (
                            <option key={key} value={key}>
                                {categories[key].title}
                            </option>
                        ))
                    }
                </S.Input>
            </Input>
            <Input title="Título">
                <S.Input type="text" onChange={handleTitleChange} value={title} />
            </Input>
            <Input title="Valor">
                <S.Input type="text" onChange={handleValueChange} value={value} />
            </Input>
            <S.Button onClick={handleAddButtonClick}>Adicionar</S.Button>
        </S.Container>
    );
}