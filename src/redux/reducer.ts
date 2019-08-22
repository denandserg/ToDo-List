const reducer = (state = {}, action: { type: string }) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
