const INITIAL_STATE = {
  isLoading: null,
  articles: [],
  articlesErr: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHING_ARTICLES":
      return {
        ...state,
        isLoading: true,
        articles: [],
        articlesErr: null,
      };

    case "FETCHING_ARTICLES_SUCCESS":
      return {
        ...state,
        articles: action.payload,
        articlesErr: null,
        isLoading: false,
      };

    case "FETCHING_ARTICLES_FAILURE":
      return {
        ...state,
        articles: [],
        articlesErr: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
