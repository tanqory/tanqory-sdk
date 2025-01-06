import { TanqoryAuth } from "./auth";
import { TanqoryProduct } from "./product";
import { TanqoryForm } from "./form";

export class TanqorySDK {
  public auth: TanqoryAuth;
  public product: TanqoryProduct;
  public form: TanqoryForm;

  constructor(jwtToken: string) {
    this.auth = new TanqoryAuth(jwtToken);
    this.product = new TanqoryProduct(jwtToken);
    this.form = new TanqoryForm(jwtToken);
  }
}

export default TanqorySDK;