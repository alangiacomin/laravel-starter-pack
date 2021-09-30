import { postLogout } from '../apis/apiUser';
import navbarLinks from './navbarLinks';

jest.mock('../apis/apiUser');
postLogout.mockImplementation(() => Promise.resolve({}));

describe('navbarLinks', () => {
  it('is object', () => {
    expect(navbarLinks).toBeObject();
  });

  it('has left array', () => {
    expect(navbarLinks.topLeft).toBeArray();
  });

  it('has right array', () => {
    expect(navbarLinks.topRight).toBeArray();
  });

  /**
   * TEST SPECIFICI SULLE AZIONI ONLICK
   */

  it('logout exist', () => {
    const logoutLink = navbarLinks.topRight.filter((x) => x.id === 'logout')[0];
    expect(logoutLink).toBeDefined();
  });

  it('logout onclick is function', () => {
    const logoutLink = navbarLinks.topRight.filter((x) => x.id === 'logout')[0];
    expect(logoutLink.onClick).toBeFunction();
  });

  it('logout onclick execute', () => {
    const logoutLink = navbarLinks.topRight.filter((x) => x.id === 'logout')[0];
    logoutLink.onClick(jest.fn());
    expect(postLogout).toBeCalledTimes(1);
  });
});
