import ErrorBoundary from '@components/ErrorBoundary';
import Routes from '@components/Routes';
import { getRoutesFromConfig } from '@utils/routeHelper';
import { ConnectedRouter } from 'connected-react-router';
import { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import { getTranslation } from '../../apis/apiTranslation';
import config from '../../config';
import routesConfig from '../../config/routes';
import configureStore, { history } from '../../configureStore';
import { APP_ACTIONS } from '../../reducers/appReducer';
import { USER_ACTIONS } from '../../reducers/userReducer';

const Application = () => {
  const store = configureStore({});

  const setAppLanguage = useCallback(() => {
    // devo farlo così senza useDispatch() perché ancora non sono dentro il <Provider />
    store.dispatch({ type: APP_ACTIONS.SET_LANGUAGE, payload: config.app.defaultLanguage });
  },
  [store]);

  const setUserData = useCallback(() => {
    // devo farlo così senza useDispatch() perché ancora non sono dentro il <Provider />
    store.dispatch({ type: USER_ACTIONS.SET_DATA, payload: window.user });
  },
  [store]);

  const preloadAppLanguages = useCallback(() => {
    (config.app.preloadLanguages || []).forEach(({ lang, namespaces }) => {
      (namespaces || []).forEach((namespace) => {
        getTranslation(lang, namespace)
          .then((response) => {
            store.dispatch({
              type: APP_ACTIONS.SET_TRANSLATION,
              payload: { locale: lang, namespace, values: response },
            });
          });
      });
    });
  }, [store]);

  useEffect(() => {
    setAppLanguage();
    setUserData();
    setTimeout(preloadAppLanguages, 1000);
  }, [preloadAppLanguages, setAppLanguage, setUserData, store]);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Routes routes={getRoutesFromConfig(routesConfig)} />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  );
};

Application.propTypes = {};

export default Application;
