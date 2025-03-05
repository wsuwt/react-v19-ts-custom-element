# React 19 with TypeScript and Custom Web Component

This project showcases how to use React 19 and a custom web component together.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/react-v19-ts-custom-element.git
    cd react-v19-ts-custom-element
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure

- `src/`: Contains the source code of the React application.
- `public/`: Contains the public assets and the HTML template.

### Foobar Web Component

The `Foobar` web component is a custom element that can be used in your React components. It is defined in the `src/Foobar.ts` file.

To use the `Foobar` web component in your React component, you can import and register it as follows:

```typescript
import './Foobar';

// ...existing code...

const App = () => {
  return (
    <div>
      <h1>Welcome to React 19 with Custom Web Component</h1>
      <foobar-element></foobar-element>
    </div>
  );
};

export default App;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
