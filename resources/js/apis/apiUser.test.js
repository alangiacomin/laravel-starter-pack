import httpRequest from '../utils/httpHelper';
import { postLogin, postLogout } from './apiUser';

jest.mock('../utils/httpHelper');
httpRequest.post.mockImplementation(() => { });

afterEach(() => {
  jest.clearAllMocks();
});

describe('postLogin', () => {
  it('is function', () => {
    expect(postLogin).toBeFunction();
  });

  it('post called', () => {
    postLogin();
    expect(httpRequest.post).toBeCalledTimes(1);
  });

  it('post url', () => {
    postLogin();
    expect(httpRequest.post).toBeCalledWith('/login', {});
  });

  it('post empty email', () => {
    postLogin('');
    expect(httpRequest.post).toBeCalledWith('/login', { email: '' });
  });

  it('post email', () => {
    postLogin('aaa@aaa.it');
    expect(httpRequest.post).toBeCalledWith('/login', { email: 'aaa@aaa.it' });
  });

  it('post empty password', () => {
    postLogin('aaa@aaa.it', '');
    expect(httpRequest.post).toBeCalledWith('/login', { email: 'aaa@aaa.it', password: '' });
  });

  it('post password', () => {
    postLogin('aaa@aaa.it', 'qwe123');
    expect(httpRequest.post).toBeCalledWith('/login', { email: 'aaa@aaa.it', password: 'qwe123' });
  });
});

describe('postLogout', () => {
  it('is function', () => {
    expect(postLogout).toBeFunction();
  });

  it('post called', () => {
    postLogout();
    expect(httpRequest.post).toBeCalledTimes(1);
  });

  it('post url', () => {
    postLogout();
    expect(httpRequest.post).toBeCalledWith('/logout', {});
  });

  it('post data', () => {
    postLogout();
    expect(httpRequest.post).toBeCalledWith('/logout', { });
  });
});
