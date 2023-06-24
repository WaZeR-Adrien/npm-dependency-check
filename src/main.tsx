import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/main.scss';
import { store } from '@/store/store';
import App from '@/App';

const renderApp = async () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
  );
};

renderApp();
