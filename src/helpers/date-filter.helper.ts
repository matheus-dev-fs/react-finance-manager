import { ItemListType } from "../types/item-list.type";
import { IItem } from "../interfaces/item.interface";

export const getCurrentMonth = (): string => {
    const now: Date = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: ItemListType, dateTarget: string): ItemListType => {
    if (!list || list.length === 0) {
        return [];
    }
    
    const date: string[] = dateTarget.split('-');

    if (date.length !== 2) {
        return [];
    }

    const [year, month]: [number, number] = [Number(date[0]), Number(date[1])];

    return list.filter((item: IItem): boolean => 
        item.date.getFullYear() === year && (item.date.getMonth() + 1) === month
    );
};

export const formatDate = (date: Date): string => {
    const year: string = date.getFullYear().toString();
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const day: string = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
};