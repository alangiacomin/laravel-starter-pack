import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routes from '../../config/routes';
import Errore from '../../pages/Errore/Errore';
import { hasPermission } from '../../utils/userHelper';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const ProtectedRoute = (props) => {
  const { perm, to } = props;

  const user = useSelector((state) => state.user);
  const stateRouterLocation = useSelector((state) => state.router.location);
  const thisReferrer = stateRouterLocation.pathname;
  const pastReferrer = (stateRouterLocation.state || {}).referrer;

  // verifica permessi speciali
  if (perm === 'guests_only' && user.id) {
    return <Redirect to={pastReferrer || routes.home.to} />;
  }
  if (perm && perm === 'registered_only' && !user.id) {
    if (to === routes.logout.to) {
      return <Redirect to={routes.home.to} />;
    }
    return (
      <Redirect to={{
        pathname: routes.login.to,
        state: { referrer: thisReferrer },
      }}
      />
    );
  }

  if (perm && !hasPermission(user, perm)) {
    if (user.id) {
      return (<Errore errorCode={403} />);
    }
    return (
      <Redirect to={{
        pathname: routes.login.to,
        state: { referrer: thisReferrer },
      }}
      />
    );
  }

  // permessi ok, accedo alla route
  return (
    <ErrorBoundary>
      <Route {...props} />
    </ErrorBoundary>
  );
};

ProtectedRoute.propTypes = {
  perm: PropTypes.string,
  to: PropTypes.string.isRequired,
};

ProtectedRoute.defaultProps = {
  perm: '',
};

export default ProtectedRoute;
