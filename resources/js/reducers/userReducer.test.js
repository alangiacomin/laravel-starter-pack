import reducer, { USER_ACTIONS } from './userReducer';

describe('user reducer', () => {
  it('is function', () => {
    expect(typeof reducer).toBe('function');
  });

  it('no params', () => {
    const result = reducer();
    expect(result).toEqual({});
  });

  it('logged in, no state', () => {
    const result = reducer({}, { type: USER_ACTIONS.LOGGED_IN, payload: { testVar: 'testVal' } });
    expect(result).toEqual({ testVar: 'testVal' });
  });

  it('logged in, with initial state', () => {
    const result = reducer({ initial: 1 }, { type: USER_ACTIONS.LOGGED_IN, payload: { testVar: 'testVal' } });
    expect(result).toEqual({ initial: 1, testVar: 'testVal' });
  });

  it('logged in, update initial state', () => {
    const result = reducer({ testVar: 'oldVal' }, { type: USER_ACTIONS.LOGGED_IN, payload: { testVar: 'newVal' } });
    expect(result).toEqual({ testVar: 'newVal' });
  });

  it('logged out, no state', () => {
    const result = reducer({}, { type: USER_ACTIONS.LOGGED_OUT, payload: { testVar: 'testVal' } });
    expect(result).toEqual({ });
  });

  it('logged out, with initial state', () => {
    const result = reducer({ initial: 1 }, { type: USER_ACTIONS.LOGGED_OUT, payload: { testVar: 'testVal' } });
    expect(result).toEqual({ });
  });

  it('logged out, update initial state', () => {
    const result = reducer({ testVar: 'oldVal' }, { type: USER_ACTIONS.LOGGED_OUT, payload: { testVar: 'newVal' } });
    expect(result).toEqual({ });
  });

  it('set data, no state', () => {
    const result = reducer({}, { type: USER_ACTIONS.SET_DATA, payload: { testVar: 'testVal' } });
    expect(result).toEqual({ testVar: 'testVal' });
  });

  it('set data, with initial state', () => {
    const result = reducer({ initial: 1 }, { type: USER_ACTIONS.SET_DATA, payload: { testVar: 'testVal' } });
    expect(result).toEqual({ initial: 1, testVar: 'testVal' });
  });

  it('set data, update initial state', () => {
    const result = reducer({ testVar: 'oldVal' }, { type: USER_ACTIONS.SET_DATA, payload: { testVar: 'newVal' } });
    expect(result).toEqual({ testVar: 'newVal' });
  });
});

describe('user actions', () => {
  it('login failed', () => {
    expect(USER_ACTIONS.LOGIN_FAILED).toBe('USER/LOGIN_FAILED');
  });

  it('logged in', () => {
    expect(USER_ACTIONS.LOGGED_IN).toBe('USER/LOGGED_IN');
  });

  it('logged out', () => {
    expect(USER_ACTIONS.LOGGED_OUT).toBe('USER/LOGGED_OUT');
  });

  it('set data', () => {
    expect(USER_ACTIONS.SET_DATA).toBe('USER/SET_DATA');
  });
});
