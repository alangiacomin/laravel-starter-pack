import axios from 'axios';
import httpRequest from './httpHelper';

jest.mock('axios');
axios.request.mockImplementation(() => Promise.resolve({ data: {} }));

describe('httpRequest get', () => {
  it('is function', () => {
    const { get } = httpRequest;
    expect(typeof get).toEqual('function');
  });

  it('only url', () => {
    const { get } = httpRequest;
    get('url');
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('empty params', () => {
    const { get } = httpRequest;
    get('url', []);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('with params', () => {
    const { get } = httpRequest;
    get('url', [{ first: 1 }]);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [{ first: 1 }],
    });
  });

  it('empty options', () => {
    const { get } = httpRequest;
    get('url', [], {});
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('fullResponse false', () => {
    const { get } = httpRequest;
    get('url', [], { fullResponse: false });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });

  it('fullResponse true', () => {
    const { get } = httpRequest;
    get('url', [], { fullResponse: true });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: [],
    });
  });
});

describe('httpRequest post', () => {
  it('is function', () => {
    const { post } = httpRequest;
    expect(typeof post).toEqual('function');
  });

  it('only url', () => {
    const { post } = httpRequest;
    post('url');
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('empty data', () => {
    const { post } = httpRequest;
    post('url', []);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('with data', () => {
    const { post } = httpRequest;
    post('url', [{ first: 1 }]);
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [{ first: 1 }],
    });
  });

  it('empty options', () => {
    const { post } = httpRequest;
    post('url', [], {});
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('fullResponse false', () => {
    const { post } = httpRequest;
    post('url', [], { fullResponse: false });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });

  it('fullResponse true', () => {
    const { post } = httpRequest;
    post('url', [], { fullResponse: true });
    expect(axios.request).toBeCalledWith({
      url: 'url',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: [],
    });
  });
});
