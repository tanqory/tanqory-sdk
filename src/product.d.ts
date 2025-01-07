import { AxiosInstance } from "axios";
import { Params } from "./config";

/**
 * Interface representing a product.
 */
export interface Product {
  _id: string;
  [key: string]: string | number | Array<string | number | object> | object;
}

/**
 * Interface representing a paginated list of products.
 */
export interface ProductList {
  items: Product[];
  paging: {
    next: string | null;
    previous: string | null;
  };
}

/**
 * Interface representing a collection.
 */
export interface Collection {
  _id: string;
  [key: string]: string | number | Array<string | number | object> | object;
}

/**
 * Interface representing a paginated list of collections.
 */
export interface CollectionList {
  items: Collection[];
  paging: {
    next: string | null;
    previous: string | null;
  };
}

/**
 * Class to handle product-related operations.
 */
export declare class TanqoryProduct {
  /**
   * Axios instance used for HTTP requests.
   */
  private client: AxiosInstance;

  /**
   * Creates a new instance of TanqoryProduct.
   * @param jwtToken The JWT token used for authorization.
   */
  constructor(jwtToken: string);

  /**
   * Fetches a paginated list of products for a specific site.
   * @param siteId The ID of the site.
   * @param params Optional query parameters.
   * @returns A Promise that resolves to a ProductList.
   * @throws An error if the products cannot be fetched.
   */
  getProducts(siteId: string, params?: Params): Promise<ProductList>;

  /**
   * Fetches details of a specific product.
   * @param siteId The ID of the site.
   * @param productId The ID of the product.
   * @returns A Promise that resolves to a Product object.
   * @throws An error if the product cannot be fetched.
   */
  getProduct(siteId: string, productId: string): Promise<Product>;

  /**
   * Adds a new product to the specified site.
   * @param siteId The ID of the site.
   * @param product The product data to be added.
   * @returns A Promise that resolves to the added Product object.
   * @throws An error if the product cannot be added.
   */
  addProduct(siteId: string, product: Product): Promise<Product>;

  /**
   * Updates an existing product in the specified site.
   * @param siteId The ID of the site.
   * @param productId The ID of the product to be updated.
   * @param product The updated product data.
   * @returns A Promise that resolves to the updated Product object.
   * @throws An error if the product cannot be updated.
   */
  updateProduct(siteId: string, productId: string, product: Product): Promise<Product>;

  /**
   * Removes a product from the specified site.
   * @param siteId The ID of the site.
   * @param productId The ID of the product to be removed.
   * @returns A Promise that resolves to the removed Product object.
   * @throws An error if the product cannot be removed.
   */
  removeProduct(siteId: string, productId: string): Promise<Product>;

  /**
   * Fetches a paginated list of collections for a specific site.
   * @param siteId The ID of the site.
   * @param params Optional query parameters.
   * @returns A Promise that resolves to a CollectionList.
   * @throws An error if the collections cannot be fetched.
   */
  getCollections(siteId: string, params?: object): Promise<CollectionList>;

  /**
   * Fetches details of a specific collection.
   * @param siteId The ID of the site.
   * @param collectionId The ID of the collection.
   * @returns A Promise that resolves to a Collection object.
   * @throws An error if the collection cannot be fetched.
   */
  getCollection(siteId: string, collectionId: string): Promise<Collection>;
}