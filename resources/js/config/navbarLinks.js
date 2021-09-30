import { postLogout } from '../apis/apiUser';
import { USER_ACTIONS } from '../reducers/userReducer';
import { getRoutesFromConfig } from '../utils/routeHelper';
import routesConfig from './routes';

const routes = getRoutesFromConfig(routesConfig);

const navbarLinks = {
  topLeft: [
    routes.home,
    routes.secondPage,
  ],
  topRight: [
    routes.login,
    {
      ...routes.logout,
      onClick: (dispatch) => {
        postLogout()
          .then((response) => {
            dispatch({ type: USER_ACTIONS.LOGGED_OUT });
          });
      },
    },
  ],
};

export default navbarLinks;
