import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranslation } from '../apis/apiTranslation';
import { APP_ACTIONS } from '../reducers/appReducer';

const useTranslation = (namespace) => {
  const lang = useSelector((state) => state.app.lang);
  const dispatch = useDispatch();
  const translation = useSelector((state) => state.app.translation);

  if (!translation || !translation[lang] || !translation[lang][namespace]) {
    getTranslation(lang, namespace)
      .then((response) => {
        dispatch({
          type: APP_ACTIONS.SET_TRANSLATION,
          payload: { locale: lang, namespace, values: response },
        });
      });
  }

  const t = useCallback((key) => {
    if (!translation || !translation[lang] || !translation[lang][namespace]) {
      return '';
    }
    const val = translation[lang][namespace][key] || `{${key}}`;
    return val;
  }, [lang, namespace, translation]);

  return { t };
};

export default useTranslation;
