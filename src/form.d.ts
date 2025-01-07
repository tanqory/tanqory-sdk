import { AxiosInstance } from "axios";
import { Params } from "./config";

export declare class TanqoryForm {
  /**
   * Axios instance used for HTTP requests.
   */
  private client: AxiosInstance;

  /**
   * Creates a new instance of TanqoryForm.
   * @param jwtToken The JWT token used for authorization.
   */
  constructor(jwtToken: string);

  /**
   * Fetches the schema for a specific form.
   * @param formId The ID of the form.
   * @returns A Promise that resolves to the schema of the form.
   * @throws An error if the schema cannot be fetched.
   */
  getSchema(formId: string): Promise<any>;

  /**
   * Fetches the documents associated with a specific form and site.
   * @param siteId The ID of the site.
   * @param formId The ID of the form.
   * @param params Optional query parameters.
   * @returns A Promise that resolves to the documents data.
   * @throws An error if the documents cannot be fetched.
   */
  getDocs(siteId: string, formId: string, params?: Params): Promise<any>;

  /**
   * Fetches a single document associated with a specific form, site, and document ID.
   * @param siteId The ID of the site.
   * @param formId The ID of the form.
   * @param dataId The ID of the document.
   * @returns A Promise that resolves to the document data.
   * @throws An error if the document cannot be fetched.
   */
  getDoc(siteId: string, formId: string, dataId: string): Promise<any>;

  /**
   * Adds a new document to a specific form and site.
   * @param siteId The ID of the site.
   * @param formId The ID of the form.
   * @param data The data for the new document.
   * @returns A Promise that resolves to the added document data.
   * @throws An error if the document cannot be added.
   */
  addDoc(siteId: string, formId: string, data: any): Promise<any>;

  /**
   * Updates a document in a specific form and site.
   * @param siteId The ID of the site.
   * @param formId The ID of the form.
   * @param dataId The ID of the document to update.
   * @param data The updated data for the document.
   * @returns A Promise that resolves to the updated document data.
   * @throws An error if the document cannot be updated.
   */
  updateDoc(siteId: string, formId: string, dataId: string, data: any): Promise<any>;

  /**
   * Deletes a document from a specific form and site.
   * @param siteId The ID of the site.
   * @param formId The ID of the form.
   * @param dataId The ID of the document to delete.
   * @returns A Promise that resolves to the result of the deletion.
   * @throws An error if the document cannot be deleted.
   */
  deleteDoc(siteId: string, formId: string, dataId: string): Promise<any>;
}