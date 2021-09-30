const routes = {
  home: {
    title: 'home',
    to: '/',
    component: 'PaginaUno',
  },
  secondPage: {
    title: 'page_two',
    to: '/page2',
    component: 'PaginaDue',
    perm: 'pagetwo_view',
  },
  login: {
    title: 'login',
    to: '/login',
    component: 'Login',
    perm: 'guests_only',
  },
  logout: {
    title: 'logout',
    to: '/logout',
    component: 'PaginaDue',
    perm: 'registered_only',
  },
};

export default routes;
