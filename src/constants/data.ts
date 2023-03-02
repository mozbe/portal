import { createData } from '../helpers/createData';
import { transactionProps } from './types';

export const transactions: transactionProps[] = [
  {
    id: 'trans1',
    timestamp: 1572411600000,
    amount: 60,
    type : 'DEPOSIT',
    status: 'COMPLETED',
    playerId: 'usr2',
  },
  {
    id: 'trans2',
    timestamp: 1572411600000,
    amount: 10,
    type : 'BET',
    status: 'COMPLETED',
    playerId: 'usr5',
  },
  {
    id: 'trans3',
    timestamp: 1572411600000,
    amount: 30,
    type : 'WITHDRAWAL',
    status: 'COMPLETED',
    playerId: 'usr1',
  },
  {
    id: 'trans4',
    timestamp: 1572411600000,
    amount: 160,
    type : 'DEPOSIT',
    status: 'COMPLETED',
    playerId: 'usr3',
  },
  {
    id: 'trans5',
    timestamp: 1572411600000,
    amount: 200,
    type : 'DEPOSIT',
    status: 'COMPLETED',
    playerId: 'usr2',
  },
  {
    id: 'trans6',
    timestamp: 1572411600000,
    amount: 10,
    type : 'BET',
    status: 'FAILED',
    playerId: 'usr1',
  },
  {
    id: 'trans7',
    timestamp: 1572411600000,
    amount: 60,
    type : 'DEPOSIT',
    status: 'COMPLETED',
    playerId: 'usr1',
  },
  {
    id: 'trans8',
    timestamp: 1572411600000,
    amount: 60,
    type : 'DEPOSIT',
    status: 'COMPLETED',
    playerId: 'usr2',
  },
  {
    id: 'trans9',
    timestamp: 1572411600000,
    amount: 60,
    type : 'WITHDRAWAL',
    status: 'COMPLETED',
    playerId: 'usr3',
  },
  {
    id: 'trans10',
    timestamp: 1572411600000,
    amount: 60,
    type : 'WIN',
    status: 'COMPLETED',
    playerId: 'usr5',
  },
];

export const rows = [
  createData('usr1', 'Nathanial', 'Mays', 'nat@gmail', 'ACTIVE', 4, 1456808400000, transactions.filter((a: any) => a.playerId === 'usr1')),
  createData('usr2', 'Amelia', 'Rich', 'nat@gmail', 'ACTIVE', 4, 1570165200000, transactions.filter((a: any) => a.playerId === 'usr2')),
  createData('usr3', 'Xiomara', 'Hampton', 'nat@gmail', 'ACTIVE', 4, 1572411600000, transactions.filter((a: any) => a.playerId === 'usr3')),
  createData('usr4', 'Allie', 'Brennan', 'nat@gmail', 'DISABLED', 4, 1590814800000, transactions.filter((a: any) => a.playerId === 'usr4')),
  createData('usr5', 'Mercedes', 'Alexander', 'nat@gmail', 'ACTIVE', 4, 1633237200000, transactions.filter((a: any) => a.playerId === 'usr5')),
];

