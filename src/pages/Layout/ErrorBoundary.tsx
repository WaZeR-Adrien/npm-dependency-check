import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error: any = useRouteError();
  return <p>Error : {error.message}</p>;
};

export default ErrorBoundary;
