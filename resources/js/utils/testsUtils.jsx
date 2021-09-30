import { createMemoryHistory } from 'history';
import { render as renderDom, unmountComponentAtNode } from 'react-dom';
import { act as actDom } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { combineReducers, createStore } from 'redux';

afterEach(() => {
  jest.clearAllMocks();
});

const emptyReducer = (state = [], action) => state;

const defaultState = {
  user: {},
  router: {},
  app: { lang: 'it' },
};

const TestRender = () => {
  let container = null;
  const history = createMemoryHistory();
  const render = (Component) => renderDom(Component, container);
  const renderWrapped = (Component, { initialState = {}, reducers = [] } = {}) => {
    const store = createStore(
      combineReducers(
        {
          app: emptyReducer,
          router: emptyReducer,
          user: emptyReducer,
        },
        ...reducers,
      ),
      { ...defaultState, ...initialState },
    );
    return renderDom(
      <Provider store={store}>
        <Router history={history}>{Component}</Router>
      </Provider>,
      container,
    );
  };
  const getContainer = () => container;
  const getSelector = (sel) => container.querySelector(sel);
  const expectSelector = (sel) => expect(getSelector(sel));
  const getLocation = () => history.location;
  const execute = ({ arrange, act, assert }) => {
    // before each test
    container = document.createElement('div');
    document.body.appendChild(container);
    // test
    arrange && arrange();
    actDom(act);
    assert();
    // after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  };

  return {
    execute, render, renderWrapped, getSelector, expectSelector, getLocation, getContainer,
  };
};

/*
const createElement = (Element) => {
  const WrappedElement = (props) => <Element />;
  const testRenderer = TestRenderer.create(<WrappedElement />);
  return testRenderer.root;
};

const hasClass = (domElement, className) => domElement.props.className.split(' ').includes(className);

const getChildren = (domElement) => domElement.props.children;

const getProp = (domElement, prop) => domElement.props[prop];

const testRender = (children, { initialState, reducers = [] } = {}) => {
  const store = createStore(combineReducers({ user: emptyReducer }, ...reducers), initialState);
  return TestRenderer.create(
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>,
  );
};
*/

const noOpFunc = () => null;

const nullRenderedComponent = () => null;

export {
  TestRender,
  noOpFunc,
  nullRenderedComponent,
  // createElement,
  // hasClass,
  // getChildren,
  // testRender,
  // createElement,
  // hasClass,
  // getChildren,
  // testRender,
  // getProp,
};
