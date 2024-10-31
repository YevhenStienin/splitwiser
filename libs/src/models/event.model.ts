import { Expense, Participant } from '.';

export enum EventStatus {
  Open = 'open',
  Settled = 'settled',
}

export class Event {
  id!: string;
  name!: string;
  description?: string;
  date!: string;
  totalSpent!: number;
  totalParticipants!: number;
  status!: EventStatus;

  participants!: Participant[];
  expenses!: Expense[];
}
