import { RouteObject } from 'react-router-dom';
import Root from '@/pages/Layout/Root';
import ErrorBoundary from '@/pages/Layout/ErrorBoundary';
import UpgradeMainDependencyPage from '@/pages/Update/UpgradeMainDependencyPage';
import UpgradePluginPage from '@/pages/Update/UpgradePluginPage';
import SetupPage from '@/pages/Setup/SetupPage';
import PackageLockGuard from '@/pages/Layout/PackageLockGuard';
import Tools from '@/pages/Setup/ToolsPage';
import MainDependencyGuard from '@/pages/Layout/MainDependencyGuard';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    handle: {
      crumb: 'Home',
    },
    children: [
      {
        path: '',
        element: <SetupPage />,
      },
      {
        path: '',
        element: <PackageLockGuard />,
        children: [
          {
            path: 'tools',
            element: <Tools />,
            handle: {
              crumb: 'Upgrade Main Dependency',
            },
          },
          {
            path: 'tools',
            element: <MainDependencyGuard />,
            children: [
              {
                path: 'upgrade-main-dep',
                element: <UpgradeMainDependencyPage />,
                handle: {
                  crumb: 'Upgrade Main Dependency',
                },
              },
              {
                path: 'upgrade-plugin',
                element: <UpgradePluginPage />,
                handle: {
                  crumb: 'Upgrade Plugin',
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
