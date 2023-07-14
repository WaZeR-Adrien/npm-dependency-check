import { RouteObject } from 'react-router-dom';
import Root from '@/pages/Layout/Root';
import ErrorBoundary from '@/pages/Layout/ErrorBoundary';
import UpgradeReact from '@/pages/Update/UpgradeReact';
import DependencyUpdate from '@/pages/Update/DependencyUpdate';
import Setup from '@/pages/Setup/Setup';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Setup />,
      },
      {
        path: 'upgrade-react',
        element: <UpgradeReact />,
      },
      {
        path: 'upgrade-dependency',
        element: <DependencyUpdate />,
      },
    ],
  },
];

export default routes;
