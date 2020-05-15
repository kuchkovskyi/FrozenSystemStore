export class Product {
  public id: number;
  public name: string;
  public price: number;
  public brand: string;
  public category: string;
  public description: string;
  public mainImage: string;
  public warranty: string;
  public payment: string;
  public firstAdditionalImage: string;
  public secondAdditionalImage: string;
  public thirdAdditionalImage: string;

   constructor () {
    this.id = null;
    this.name = null;
    this.price = null;
    this.brand = null;
    this.category = null;
    this.description = null;
    this.mainImage = null;
    this.warranty = null;
    this.payment = null;
    this.firstAdditionalImage = null;
    this.secondAdditionalImage = null;
    this.thirdAdditionalImage = null;
   }
}
