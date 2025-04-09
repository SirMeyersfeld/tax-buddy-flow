
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root
if (rootElement) {
  const root = createRoot(rootElement);
  
  // Render the app
  root.render(<App />);
} else {
  console.error("Root element not found!");
}
