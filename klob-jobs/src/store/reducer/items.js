const initialState = {
  items: [],
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchItem":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

export default itemsReducer;
