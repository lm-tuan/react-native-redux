
import * as types from './count.type';

const initialState = {
  number: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
      return { ...state , number : state.number + 1};
    case types.REDUCTION:
        return { ...state , number : state.number - 1};
    case types.RESTART:
        return { ...state , number : 0};
    default:
      return state;
  }
};

export default counterReducer;