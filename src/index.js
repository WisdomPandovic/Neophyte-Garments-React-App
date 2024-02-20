import React from 'react';
import ReactDOM from 'react-dom/client'; // Change the import statement
import { Provider } from 'react-redux'; // Step 1: Import the Provider component
import store from './store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* Step 3: Wrap your root component with the Provider component and pass the Redux store */}
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>,
);

reportWebVitals();
