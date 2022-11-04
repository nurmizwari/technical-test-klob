export const getItem = (payload) => {
  return {
    type: "fetchItem",
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
