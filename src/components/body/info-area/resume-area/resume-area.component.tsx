import { JSX } from 'react';
import * as S from './resume-area.styles';
import { ResumeItem } from './resume-item/resume-item.component';

type Props = {
    income: number;
    expense: number;
}

export const ResumeArea = ({ income, expense }: Props): JSX.Element => {
  return (
    <S.Container>
        <ResumeItem 
            title="Receitas" 
            value={income} 
        />
        <ResumeItem 
            title="Despesas" 
            value={expense} 
        />
        <ResumeItem 
            title="Balanço" 
            value={income - expense} 
            color={income - expense < 0 ? '#ff0000' : '#00ff00'} 
        />
    </S.Container>
  );
}