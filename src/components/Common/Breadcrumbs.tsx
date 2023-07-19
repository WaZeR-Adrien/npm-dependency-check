import { Link, useMatches } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

interface Crumb {
  path: string;
  label: string;
  isLast: boolean;
}

const Breadcrumbs = () => {
  const matches = useMatches() as any[];
  const crumbs = matches
    .filter(({ handle }) => !!handle?.crumb)
    .map((match, i, list) => ({
      path: match.pathname,
      label: match.handle?.crumb,
      isLast: i === list.length - 1,
    })) as Crumb[];

  if (crumbs.length < 2) {
    return null;
  }

  return (
    <Breadcrumb>
      {crumbs.map((crumb, i) => (
        <BreadcrumbItem key={i} active={!crumb.isLast}>
          {crumb.isLast ? (
            <span className="text-primary fw-light">{crumb.label}</span>
          ) : (
            <Link to={crumb.path}>{crumb.label}</Link>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
