import { ItemListType } from "../types/item-list.type";
import { v4 } from 'uuid';

export const items: ItemListType = [
    { id: v4(), date: new Date(2026, 2, 15), category: 'food', title: 'McDonalds', value: 32.12 },
    { id: v4(), date: new Date(2026, 2, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { id: v4(), date: new Date(2026, 2, 10), category: 'salary', title: 'Salário ACME', value: 4500 },
    { id: v4(), date: new Date(2026, 3, 10), category: 'salary', title: 'Salário ACME', value: 4500 },
    { id: v4(), date: new Date(2026, 3, 10), category: 'rent', title: 'Aluguel Apt', value: 7300 }
];