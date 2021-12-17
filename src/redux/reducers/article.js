const INITIAL_STATE = {
  isLoading: null,
  article: [],
  articleErr: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHING_ARTICLE":
      return {
        ...state,
        isLoading: true,
        article: [],
        articleErr: null,
      };

    case "FETCHING_ARTICLE_SUCCESS":
      return {
        ...state,
        article: action.payload,
        articleErr: null,
        isLoading: false,
      };

    case "FETCHING_ARTICLE_FAILURE":
      return {
        ...state,
        article: [],
        articleErr: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
