import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { lazyPage } from '../../utils/componentsHelper';

const Routes = ({ routes }) => (
  <Switch>
    {routes && Object.entries(routes)
      .map(([key, route]) => {
        const LoadedComponent = lazyPage(route.component);
        return (
          <ProtectedRoute
            key={key}
            {...route}
            component={() => <LoadedComponent />}
          />
        );
      })}
    <Route path="*">
      <h1>NON TROVATO</h1>
    </Route>
  </Switch>
);

Routes.propTypes = {
  routes: PropTypes.shape({ }).isRequired,
};

export default Routes;
