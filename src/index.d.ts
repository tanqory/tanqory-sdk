import { TanqoryAuth } from "./auth";
import { TanqoryProduct } from "./product";
import { TanqoryForm } from "./form";

export declare class TanqorySDK {
  /**
   * Instance for authentication-related operations.
   */
  public auth: TanqoryAuth;

  /**
   * Instance for product-related operations.
   */
  public product: TanqoryProduct;

  /**
   * Instance for form-related operations.
   */
  public form: TanqoryForm;

  /**
   * Creates a new instance of TanqorySDK.
   * @param jwtToken The JWT token used for authentication and API authorization.
   */
  constructor(jwtToken?: string);
}

export default TanqorySDK;