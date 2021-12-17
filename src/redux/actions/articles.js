import axios from 'axios';

const url = 'api/articles';

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_ARTICLES" });
    return axios({
      method: 'get',
      url,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((payload) =>
        dispatch({ type: "FETCHING_ARTICLES_SUCCESS", payload: payload.data })
      )
      .catch((err) => {
        dispatch({
          type: "FETCHING_ARTICLES_FAILURE",
          error: err,
        });
      });
  };
};
