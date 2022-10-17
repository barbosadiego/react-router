import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
