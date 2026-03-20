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