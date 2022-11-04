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
        console.log(data);
      });
  };
};
export const addedItems = (formAdd) => {
  return (dispatch) => {
    console.log(formAdd, "add");
    dispatch(addingItem(formAdd));
    // data baru tidak dimasukan ke server heroku
  };
};

export const applyingJob = (payload) => {
  console.log(payload, "<< payload dari action");
  return (dispatch) => {
    dispatch(applyJobb(payload));
  };
};
export const deletingJob = (payload) => {
  console.log(payload, "<< payload dari action");
  return (dispatch) => {
    dispatch(deleteJob(payload));
  };
};
