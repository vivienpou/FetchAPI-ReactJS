const fetchItemsBegin = () => ({
    type: 'IS_LOADING',
  });
  
  const fetchItemsFailure = error => ({
    type: 'LOADED_ERROR',
    error,
  });
  
  const fetchItemsSuccess = items => ({
    type: 'LOADED_SUCCESS',
    items,
  });
  
  export const fetchItems = (url) => {
    return dispatch => {
      dispatch(fetchItemsBegin());
      return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(data => dispatch(fetchItemsSuccess(data)))
        .catch(error => dispatch(fetchItemsFailure('Impossible de récupérer les films...')));
    };
  }
  
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }