import { Expense } from '.';

export class Participant {
  id!: string;
  name!: string;
  email?: string;
  phone?: string;

  expenses!: Expense[];
}
