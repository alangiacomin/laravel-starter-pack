const actionPrefix = 'APP';
const actions = {
  SET_LANGUAGE: `${actionPrefix}/SET_LANGUAGE`,
  SET_TRANSLATION: `${actionPrefix}/SET_TRANSLATION`,
};

const initialState = {
  lang: '',
  translation: {},
};

const reducer = (state = initialState, action) => {
  switch ((action || {}).type) {
    case actions.SET_LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      };
    case actions.SET_TRANSLATION:
      return {
        ...state,
        translation: {
          ...state.translation,
          [action.payload.locale]: {
            ...state.translation[action.payload.locale],
            [action.payload.namespace]: action.payload.values,
          },
        },
      };
    default:
      return state;
  }
};

export {
  reducer as default,
  actions as APP_ACTIONS,
};
