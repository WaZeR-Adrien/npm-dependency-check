import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error: any = useRouteError();
  console.error(error);
  return <p>Error : {error.message || error.data}</p>;
};

export default ErrorBoundary;
