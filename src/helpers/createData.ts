import { statusTypes, transactionProps } from '../constants/types';

export function createData(
  id: string,
  name: string,
  surname: string,
  email: string,
  status: statusTypes,
  balance: number,
  registrationTimestamp: number,
  transactions: transactionProps[],
) {
  const timestamp = new Date(registrationTimestamp).toLocaleDateString('en-GB');

  return {
    id,
    name,
    surname,
    email,
    status,
    balance,
    timestamp,
    transactions,
  };
}
