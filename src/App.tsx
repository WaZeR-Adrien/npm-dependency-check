import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@/routes';

interface Props {
  store: EnhancedStore;
}

const router = createBrowserRouter(routes);

const App = ({ store }: Props) => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
