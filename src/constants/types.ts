export type statusTypes = 'ACTIVE' | 'DISABLED';
export type transTypes = 'DEPOSIT' | 'WITHDRAWAL' | 'BET' | 'WIN';
export type transStatusTypes = 'COMPLETED' | 'FAILED';

export interface transactionProps {
  id: string;
  timestamp: number;
  amount: number;
  type: transTypes;
  status: transStatusTypes;
  playerId: string;
}

export interface RowProps {
  id: string;
  name: string;
  surname: string;
  email: string;
  status: statusTypes;
  balance: number;
  transactions: transactionProps[];
  timestamp: number;
}
