import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import App from './App'; // Import the main App component
import { ChakraProvider, theme } from '@chakra-ui/react'; // Import Chakra UI's ChakraProvider and theme

// Create a root using React 18's new API
const root = ReactDOM.createRoot(document.getElementById('root')); // Find the 'root' element in the DOM

// Render the application wrapped with ChakraProvider for theming support
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
