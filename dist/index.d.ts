import { TanqoryAuth } from "./auth";
import { TanqoryProduct } from "./product";
import { TanqoryForm } from "./form";
export declare class TanqorySDK {
    auth: TanqoryAuth;
    product: TanqoryProduct;
    form: TanqoryForm;
    constructor(jwtToken?: string);
}
