const initialState = {
    list: [],
    loading: false,
    error: null
  };
  
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'IS_LOADING':
        return {
          ...state,
          loading: true,
        };
      case 'LOADED_SUCCESS':
        return {
          loading: false,
          error: null,
          list: action.items,
        }
      case 'LOADED_ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        }
      default:
        return state;
    }
  };
  
  export default itemsReducer;