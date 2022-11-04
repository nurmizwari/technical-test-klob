const initialState = {
  items: [],
  itemsBaru: [],
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchItem":
      return { ...state, items: action.payload };
    case "addItem":
      return { ...state, itemsBaru: action.payload };
    default:
      return state;
  }
}

export default itemsReducer;
