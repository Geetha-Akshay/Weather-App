import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure you have a root element in your HTML file with the id 'root'
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
