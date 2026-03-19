import { CategoriesType } from "../types/categories.type";

export const categories: CategoriesType = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'red', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false }
}