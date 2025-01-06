# @tanqory/sdk

## Overview
@tanqory/sdk is a software development kit (SDK) designed to provide streamlined integrations and functionalities for interacting with Tanqory services. This SDK simplifies the process of working with Tanqory APIs by offering a clean and intuitive interface.

## Features
- **Authentication**: Built-in functions to handle authentication and token management.
- **Form Handling**: Utilities for managing and validating forms.
- **Configuration**: Centralized configuration for ease of setup and management.
- **API Interaction**: Simplified HTTP requests using Axios.
- **TypeScript Support**: Fully typed for enhanced developer experience.

## Installation
To install the SDK, use npm:

```bash
npm install @tanqory/sdk
```

Or using yarn:

```bash
yarn add @tanqory/sdk
```

## Usage
### Importing the SDK
You can import and initialize the SDK in your project as follows:

```typescript
import { Auth, Config, Form, Product } from '@tanqory/sdk';

// Example: Setting up configuration
Config.init({
  apiBaseUrl: 'https://api.example.com',
});

// Example: Authenticating a user
Auth.login({
  username: 'user@example.com',
  password: 'securepassword',
}).then(response => console.log(response));
```

### Modules
#### 1. Authentication (`auth.ts`)
Manages user authentication, including login and token handling.

#### 2. Configuration (`config.ts`)
Centralizes configuration management.

#### 3. Form Utilities (`form.ts`)
Handles form validation and management.

#### 4. Product (`product.ts`)
Provides functionalities related to product data.

#### 5. Index (`index.ts`)
Exports all available modules for use in your project.

## Scripts
The following scripts are available in the project:

- `npm start`: Starts the compiled JavaScript file.
- `npm run build`: Compiles TypeScript files into JavaScript.
- `npm run lint`: Checks code for linting errors.
- `npm run lint:fix`: Fixes linting issues automatically.

## Development
### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x)
- npm or Yarn

### Building the Project
To build the project, run:

```bash
npm run build
```

This compiles TypeScript files in the `src/` directory and outputs the JavaScript files to the `dist/` directory.

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request to the [GitHub repository](https://github.com/tanqory/tanqory-sdk).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Support
For any issues or inquiries, please visit the [GitHub issues page](https://github.com/tanqory/tanqory-sdk/issues).