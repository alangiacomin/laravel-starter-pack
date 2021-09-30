import httpRequest from '../utils/httpHelper';

const getTranslation = (locale, namespace) => httpRequest.get(
  `/translation/${locale}/${namespace}`,
  {},
);

// eslint-disable-next-line import/prefer-default-export
export { getTranslation };
