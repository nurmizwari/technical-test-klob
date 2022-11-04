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
    // return fetch("https://test-server-klob.herokuapp.com/fakeJob", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     corporateLogo: formAdd.corporateLogo,
    //     corporateName: formAdd.corporateName,
    //     positionName: formAdd.positionName,
    //     status: formAdd.status,
    //     salaryFrom: formAdd.salaryFrom,
    //     salaryTo: formAdd.salaryTo,
    //     postedDate: formAdd.postedDate,
    //   }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Something Error Fetch Items");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     dispatch(addingItem(data));
    //     console.log(data);
    //   });
    console.log(formAdd, "add");
    dispatch(addingItem(formAdd));
    // data baru tidak dimasukan ke server heroku
  };
};
