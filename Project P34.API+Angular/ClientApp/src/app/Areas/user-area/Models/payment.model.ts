export class Payment {
  public id: number;
  public numberOfCard: string;
  public cVV: number;
  public month: number;
  public year: number;

  constructor() {
    this.id = null;
    this.numberOfCard = null;
    this.cVV = null;
    this.month = null;
    this.year = null;
  }
}
