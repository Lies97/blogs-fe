import axios from 'axios';

const url =
  'https://us-central1-horizontal-cab-336803.cloudfunctions.net/articles';

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_ARTICLES' });
    return axios({
      method: 'get',
      url,
    })
      .then((payload) =>
        dispatch({ type: 'FETCHING_ARTICLES_SUCCESS', payload: payload.data })
      )
      .catch((err) => {
        dispatch({
          type: 'FETCHING_ARTICLES_FAILURE',
          error: err,
        });
      });
  };
};
