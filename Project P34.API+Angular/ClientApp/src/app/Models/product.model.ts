export class ProductModel {
  public Name: string;
  public Price: number;
  public Brand: string;
  public Category: string;
  public Description: string;
  public MainImage: string;
  public Warranty: string;
  public Payment: string;
  public FirstAdditionalImage: string;
  public SecondAdditionalImage: string;
  public ThirdAdditionalImage: string;

   constructor () {
    this.Name = null;
    this.Price = null;
    this.Brand = null;
    this.Category = null;
    this.Description = null;
    this.MainImage = null;
    this.Warranty = null;
    this.Payment = null;
    this.FirstAdditionalImage = null;
    this.SecondAdditionalImage = null;
    this.ThirdAdditionalImage = null;
   }
}
