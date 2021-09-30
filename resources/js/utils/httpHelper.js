import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Add a request interceptor
// axios.interceptors.request.use((config) => {
//   config.actions
//     && config.actions.executePendingAction
//     && config.actions.executePendingAction();
//   return config;
// });

// Add a response interceptor
// axios.interceptors.response.use(
//   (response) => {
//     response.config.actions
//       && response.config.actions.executeFulfilledAction
//       && response.config.actions.executeFulfilledAction();
//     return response;
//   },
//   (error) => {
//     error.config.actions
//       && error.config.actions.executeRejectedAction();
//     // uso la throw così poi la gestisco con nel catch()
//     throw error;
//   },
// );

// const useActions = (actions = {}) => {
//   const actionsObject = typeof actions == 'string' ? createActions(actions) : actions;
//   const dispatch = useDispatch();
//   return {
//     executePendingAction: () => actionsObject.pendingAction && dispatch(actionsObject.pendingAction()),
//     executeFulfilledAction: () => actionsObject.fulfilledAction && dispatch(actionsObject.fulfilledAction()),
//     executeRejectedAction: () => actionsObject.rejectedAction && dispatch(actionsObject.rejectedAction()),
//   };
// };

const get = (url, params, options = {}) => {
  const returnFullResponse = options.fullResponse || false;
  return axios.request({
    url,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    params: params || [],
    ...options.cancelToken,
  })
    .then((result) => (returnFullResponse ? result : result.data));
};

const post = (url, data, options = {}) => {
  const returnFullResponse = options.fullResponse || false;
  return axios.request({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data || [],
    ...options.cancelToken,
    // actions: { ...options.actions },
  })
    .then((result) => (returnFullResponse ? result : result.data));
};

// const createHttpAction = (actionName) => createAction(`HTTP_REQUEST/${actionName}`);
// const createPendingAction = (actionName) => createHttpAction(`${actionName}_PENDING`);
// const createFulfilledAction = (actionName) => createHttpAction(`${actionName}_FULFILLED`);
// const createRejectedAction = (actionName) => createHttpAction(`${actionName}_REJECTED`);
// const createActions = (actionName) => ({
//   pendingAction: createPendingAction(actionName),
//   fulfilledAction: createFulfilledAction(actionName),
//   rejectedAction: createRejectedAction(actionName),
// });

const httpRequest = {
  get,
  post,
  // useActions,
  // createActions,
  // createPendingAction,
  // createFulfilledAction,
  // createRejectedAction,
};

export default httpRequest;
