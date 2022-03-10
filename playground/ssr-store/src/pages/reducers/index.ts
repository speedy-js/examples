import { AnyAction } from 'redux';

export interface AppState {
  count: number;
  date: number;
}

const initialState: AppState = {
  count: 0,
  date: 0,
};

export default function counterReducer(
  state = initialState,
  action: AnyAction,
) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
