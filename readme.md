# Tanqory SDK

This is the official SDK for integrating with Tanqory services. It provides easy-to-use interfaces for authentication, product management, and form handling.

## Installation

```bash
npm install @tanqory/sdk
```

## Usage

First, import and initialize the SDK with your JWT token:

```typescript
import TanqorySDK from '@tanqory/sdk';

const sdk = new TanqorySDK('your-jwt-token');
```

### Authentication

Access user profile information:

```typescript
try {
  const profile = await sdk.auth.getProfile();
  console.log(profile); // { id: string, name: string, email: string }
} catch (error) {
  console.error('Error:', error);
}
```

### Product Management

The SDK provides methods for managing products:

```typescript
// Get all products
const products = await sdk.product.getProducts('site-id');

// Get specific product
const product = await sdk.product.getProduct('site-id', 'product-id');

// Add new product
const newProduct = await sdk.product.addProduct('site-id', {
  id: 'product-id',
  name: 'Product Name',
  price: 99.99
});

// Update product
const updatedProduct = await sdk.product.updateProduct('site-id', 'product-id', {
  id: 'product-id',
  name: 'Updated Name',
  price: 149.99
});

// Remove product
await sdk.product.removeProduct('site-id', 'product-id');
```

### Form Management

Work with forms and their data:

```typescript
// Get form schema
const schema = await sdk.form.getSchema('form-id');

// Get all form documents
const docs = await sdk.form.getDocs('site-id', 'form-id');

// Get specific document
const doc = await sdk.form.getDoc('site-id', 'form-id', 'data-id');

// Add new document
const newDoc = await sdk.form.addDoc('site-id', 'form-id', {
  // your form data
});

// Update document
const updatedDoc = await sdk.form.updateDoc('site-id', 'form-id', 'data-id', {
  // updated form data
});

// Delete document
await sdk.form.deleteDoc('site-id', 'form-id', 'data-id');
```

## API Reference

### TanqoryAuth

- `getProfile()`: Returns user profile information

### TanqoryProduct

- `getProducts(siteId: string, params?: object)`: Get all products
- `getProduct(siteId: string, productId: string)`: Get specific product
- `addProduct(siteId: string, product: Product)`: Add new product
- `updateProduct(siteId: string, productId: string, product: Product)`: Update existing product
- `removeProduct(siteId: string, productId: string)`: Remove product

### TanqoryForm

- `getSchema(formId: string)`: Get form schema
- `getDocs(siteId: string, formId: string, params?: object)`: Get all form documents
- `getDoc(siteId: string, formId: string, dataId: string)`: Get specific document
- `addDoc(siteId: string, formId: string, data: any)`: Add new document
- `updateDoc(siteId: string, formId: string, dataId: string, data: any)`: Update document
- `deleteDoc(siteId: string, formId: string, dataId: string)`: Delete document

## Error Handling

All methods return promises and can throw errors. It's recommended to use try-catch blocks:

```typescript
try {
  const products = await sdk.product.getProducts('site-id');
} catch (error) {
  console.error('Error:', error);
}
```

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## License

This project is licensed under the MIT License.