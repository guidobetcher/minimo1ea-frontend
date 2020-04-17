export class Event {
  _id: string;
  name: string;
  description: string;
  date: string;
  constructor(name: string, description: string, date: string) {
    this.name = name;
    this.description = description;
    this.date = date;
  }
}
