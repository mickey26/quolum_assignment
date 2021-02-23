const INITIAL_STATE = {
  splBut: false,
  evalExpression: [],
  initialize: true,
};

export default function LandingReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "change spl button":
      return {
        ...state,
        splBut: !action.payload,
      };
    case "evaluating Expression":
      return {
        ...state,
        evalExpression: action.payload.finalArray,
        initialize: false,
      };
    case "calculation action":
      return {
        ...state,
        evalExpression: action.payload,
        initialize: false,
      };
    case "clear all state":
      return {
        evalExpression: [],
        initialize: true,
      };
    case "scientific calculation":
      return {
        ...state,
        evalExpression: action.payload,
        initialize: false,
      };

    default:
      return state;
  }
}
