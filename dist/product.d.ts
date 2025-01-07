import { Params } from "./config";
export interface Product {
    _id: string;
    [key: string]: string | number | Array<string | number | object> | object;
}
export interface ProductList {
    items: Product[];
    paging: {
        next: string | null;
        previous: string | null;
    };
}
export interface Collection {
    _id: string;
    [key: string]: string | number | Array<string | number | object> | object;
}
export interface CollectionList {
    items: Collection[];
    paging: {
        next: string | null;
        previous: string | null;
    };
}
export declare class TanqoryProduct {
    private client;
    constructor(jwtToken: string);
    getProducts(siteId: string, params?: Params): Promise<ProductList>;
    getProduct(siteId: string, productId: string): Promise<Product>;
    addProduct(siteId: string, product: Product): Promise<Product>;
    updateProduct(siteId: string, productId: string, product: Product): Promise<Product>;
    removeProduct(siteId: string, productId: string): Promise<Product>;
    getCollections(siteId: string, params?: object): Promise<CollectionList>;
    getCollection(siteId: string, collectionId: string): Promise<Collection>;
}
