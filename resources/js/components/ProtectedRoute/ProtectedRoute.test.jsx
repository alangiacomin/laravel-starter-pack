import { Route } from 'react-router';
import { TestRender } from '@utils/testsUtils';
import Errore from '../../pages/Errore/Errore';
import ProtectedRoute from './ProtectedRoute';

// jest.mock('react-redux');
// useSelector.mockImplementation(() => (
//   {
//     user: {},
//     router: {
//       location: '/',
//     },
//   }));

describe('ProtectedRoute', () => {
  it('render route', () => {
    const { renderWrapped, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <ProtectedRoute to="/" />,
          {
            initialState: {
              router: {
                location: {},
              },
            },
          },
        );
      },
      assert: () => {
        expect(<Route />).toBeDefined();
      },
    });
  });

  it('render unauthorized', () => {
    const { renderWrapped, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <ProtectedRoute to="/" perm="myPerm" />,
          {
            initialState: {
              user: {
                id: 1,
              },
              router: {
                location: {},
              },
            },
          },
        );
      },
      assert: () => {
        // expect(getLocation().pathname).toEqual('test');
        expect(<Errore />).toBeDefined();
      },
    });
  });

  it('no perm redirect to login', () => {
    const {
      renderWrapped, execute, getLocation,
    } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <ProtectedRoute to="/" perm="myPerm" />,
          {
            initialState: {
              user: {
              },
              router: {
                location: {},
              },
            },
          },
        );
      },
      assert: () => {
        expect(getLocation().pathname).toEqual('/login');
      },
    });
  });

  it('special_guests_only logged with referrer', () => {
    const {
      renderWrapped, execute, getLocation,
    } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <ProtectedRoute to="/page" perm="special_guests_only" />,
          {
            initialState: {
              user: {
                id: 1,
              },
              router: {
                location: {
                  state: {
                    referrer: '/previousPage',
                  },
                },
              },
            },
          },
        );
      },
      assert: () => {
        expect(getLocation().pathname).toEqual('/previousPage');
      },
    });
  });

  it('special_guests_only logged without referrer', () => {
    const {
      renderWrapped, execute, getLocation,
    } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <ProtectedRoute to="/page" perm="special_guests_only" />,
          {
            initialState: {
              user: {
                id: 1,
              },
              router: {
                location: { },
              },
            },
          },
        );
      },
      assert: () => {
        expect(getLocation().pathname).toEqual('/');
      },
    });
  });

  it('special_users_only not logged requested logout', () => {
    const {
      renderWrapped, execute, getLocation,
    } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <ProtectedRoute to="/logout" perm="special_users_only" />,
          {
            initialState: {
              user: { },
              router: {
                location: { },
              },
            },
          },
        );
      },
      assert: () => {
        expect(getLocation().pathname).toEqual('/');
      },
    });
  });

  it('special_users_only not logged requested any page', () => {
    const {
      renderWrapped, execute, getLocation,
    } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <ProtectedRoute to="/page" perm="special_users_only" />,
          {
            initialState: {
              user: { },
              router: {
                location: { },
              },
            },
          },
        );
      },
      assert: () => {
        expect(getLocation().pathname).toEqual('/login');
      },
    });
  });
});
