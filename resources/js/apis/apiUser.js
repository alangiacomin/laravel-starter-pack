import httpRequest from '../utils/httpHelper';

const postLogin = (email, password) => httpRequest.post(
  '/login',
  { email, password },
);

const postLogout = () => httpRequest.post(
  '/logout',
  { },
);

export {
  postLogin,
  postLogout,
};
