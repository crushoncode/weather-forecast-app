import { FETCH_WEATHER } from '../actions/index';

// We don't want to manipulate the existing array(state.push[]), so concat or ...

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
