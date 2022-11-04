const initialState = {
  items: [],
  itemsBaru: [],
  apllyJob: [],
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "fetchItem":
      return { ...state, items: action.payload };
    case "addItem":
      return { ...state, itemsBaru: action.payload };
    case "applyJob":
      return { ...state, apllyJob: action.payload };
    case "deleteJob":
      const newJob = state.apllyJob.filter(
        (job) => job.jobVacancyCode !== action.payload.jobVacancyCode
      );
      return { ...state, apllyJob: newJob };
    default:
      return state;
  }
}

export default itemsReducer;
