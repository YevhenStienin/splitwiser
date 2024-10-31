import { Injectable } from '@nestjs/common';
import {
  Event,
  EventStatus,
  Expense,
  Participant,
  ExpenseStatus,
} from '@splitwiser/libs';
import { v7 as uuid } from 'uuid';

export type EventCreateDto = Pick<Event, 'name' | 'date' | 'description'>;

@Injectable()
export class EventService {
  private eventId: string = uuid();

  private yevhen: Participant = {
    id: uuid(),
    name: 'Yevhen Stienin',
    expenses: [],
  };

  private vyacheslav: Participant = {
    id: uuid(),
    name: 'Vyacheslav Grygoriev',
    expenses: [],
  };

  private svitlana: Participant = {
    id: uuid(),
    name: 'Svitlana',
    expenses: [],
  };

  participants: Participant[] = [this.yevhen, this.vyacheslav, this.svitlana];

  expenses: Expense[] = [
    {
      id: uuid(),
      amount: 185.0,
      spenderId: this.vyacheslav.id,
      eventId: this.eventId,
      name: 'vegetables',
      spender: this.vyacheslav,
      status: ExpenseStatus.Open,
      description: '',
      totalGuests: 2,
    },
    {
      id: uuid(),
      amount: 1700.0,
      spenderId: this.yevhen.id,
      eventId: this.eventId,
      name: 'meat',
      spender: this.yevhen,
      status: ExpenseStatus.Open,
      description: 'chicken, pork and sausages',
      totalGuests: 3,
    },
    {
      id: uuid(),
      amount: 350.0,
      spenderId: this.svitlana.id,
      eventId: this.eventId,
      name: 'meat',
      spender: this.svitlana,
      status: ExpenseStatus.Open,
      description: 'vegetables and cakes',
      totalGuests: 1,
    },
  ];

  events: Event[] = [
    {
      id: uuid(),
      date: '2024-10-10',
      name: 'Weekend',
      status: EventStatus.Open,
      participants: this.participants,
      totalParticipants: this.expenses.reduce<number>(
        (sum, next) => sum + next.totalGuests,
        0,
      ),
      expenses: this.expenses,
      totalSpent: this.expenses.reduce<number>(
        (sum, next) => sum + next.amount,
        0,
      ),
    },
  ];

  public addEvent(event: EventCreateDto): void {
    const { name, date, description } = event;
    if (
      name === null ||
      name.trim() === '' ||
      date === null ||
      date.trim() === ''
    )
      return;
    this.events.push({
      id: uuid(),
      name,
      date,
      expenses: [],
      participants: [],
      totalParticipants: 0,
      status: EventStatus.Open,
      totalSpent: 0,
      description,
    });
  }

  public getEvents(): Event[] {
    return this.events;
  }
}
