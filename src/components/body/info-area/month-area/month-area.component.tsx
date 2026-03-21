import { JSX } from 'react';
import * as S from './month-area.styles';
import { formatCurrentMonth } from '../../../../helpers/date-filter.helper';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}

export const MonthArea = ({ currentMonth, onMonthChange }: Props): JSX.Element => {
    const handleMonthChange = (increase: boolean): string => {
        const yearAndMonth: string[] = currentMonth.split('-');

        if (yearAndMonth.length !== 2) {
            return '';
        }

        const increaseValue: number = increase ? 1 : -1;

        const [year, month]: [
            number, 
            number
        ] = [Number(yearAndMonth[0]), Number(yearAndMonth[1])];
        
        const currentDate: Date = new Date(year, month - 1, 1);
        
        currentDate.setMonth(currentDate.getMonth() + increaseValue);

        const newYear: number = currentDate.getFullYear();
        const newMonth: number = currentDate.getMonth() + 1;

        return `${newYear}-${newMonth}`;
    }

    const handlePreviousMonth = (): void => {
        const date: string = handleMonthChange(false);
        onMonthChange(date);
    };

    const handleNextMonth = (): void => {
        const date: string = handleMonthChange(true);
        onMonthChange(date);
    };

    return (
        <S.Container>
            <S.MonthArrow onClick={handlePreviousMonth}>⬅️</S.MonthArrow>
            <S.MonthTitle>{formatCurrentMonth(currentMonth)}</S.MonthTitle>
            <S.MonthArrow onClick={handleNextMonth}>➡️</S.MonthArrow>
        </S.Container>
    );
}