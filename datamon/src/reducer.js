export const initialState = {
  user: "Ali",
}

export const actionTypes = {
  SET_USER: "SET_USER",
}

const reducer = (state, action) => {
  console.log(action);

  // eslint-disable-next-line default-case
  switch(action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default reducer;

