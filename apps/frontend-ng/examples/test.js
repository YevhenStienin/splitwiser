const weekendEvent = {
    id: "uuid1",
    name: "Weekend",
    date: "2024-10-10"
};

const vSpender = {
    id: "uuid-v",
    name: "Vyacheslav"
}

const ySpender = {
    id: "uuid-y",
    name: "Yevhen"
}

const sSpender = {
    id: "uuid-s",
    name: "Svitlana"
}

const vExpense = {
    id: "uuid-ex1",
    spenderId: vSpender.id,
    eventId: weekendEvent.id,
    name: "food",
    description: "vegetables and bread",
    attachment: "",
    amount: 185.00,
    totalGuests: 2
}

const yExpense = {
    id: "uuid-ex2",
    spenderId: ySpender.id,
    eventId: weekendEvent.id,
    name: "food",
    description: "meat",
    attachment: "",
    amount: 1700.00,
    totalGuests: 3
}

const sExpense = {
    id: "uuid-ex3",
    spenderId: sSpender.id,
    eventId: weekendEvent.id,
    name: "food",
    description: "vegetables and bread",
    attachment: "",
    amount: 350.00,
    totalGuests: 1
}