import { FETCH_DATA, fetchData } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case fetchData:
      return [action.payload.data, ...state];
  }
  return state;
}
