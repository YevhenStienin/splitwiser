import { Participant } from '.';

export enum ExpenseStatus {
  Open = 'open',
  Settled = 'settled',
  Rejected = 'rejected',
}

export class Expense {
  id!: string;
  eventId!: string;
  spenderId!: string;
  spender!: Participant;
  status!: ExpenseStatus;
  name!: string;
  description!: string;
  amount!: number;
  totalGuests!: number;
  receipt?: string;
}
