import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import react from 'react';


ReactDOM.render(
  <react.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </react.StrictMode>
  ,

  document.getElementById('root')
);

