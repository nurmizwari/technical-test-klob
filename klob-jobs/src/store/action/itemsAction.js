export const getItem = (payload) => {
  return {
    type: "fetchItem",
    payload,
  };
};
export const addingItem = (payload) => {
  return {
    type: "addItem",
    payload,
  };
};
export const applyJobb = (payload) => {
  return {
    type: "applyJob",
    payload,
  };
};
export const deleteJob = (payload) => {
  return {
    type: "deleteJob",
    payload,
  };
};

export const FetchingItems = () => {
  return (dispatch) => {
    return fetch("https://test-server-klob.herokuapp.com/fakeJob")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something Error Fetch Items");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(getItem(data));
      });
  };
};
export const addedItems = (formAdd) => {
  return (dispatch) => {
    dispatch(addingItem(formAdd));
    // data baru tidak dimasukan ke server heroku
  };
};

export const applyingJob = (payload) => {
  return (dispatch) => {
    dispatch(applyJobb(payload));
  };
};
export const deletingJob = (payload) => {
  return (dispatch) => {
    dispatch(deleteJob(payload));
  };
};
