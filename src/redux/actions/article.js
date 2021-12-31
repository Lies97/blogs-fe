import axios from 'axios';

const url =
  'http://us-central1-horizontal-cab-336803.cloudfunctions.net/article';

console.log(url);
export const fetchArticle = (param) => {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_ARTICLE' });
    return axios({
      method: 'get',
      // url: `https://news-crawler-backend.herokuapp.com/api/article/${param}`,
      url: `${url}?url=${param}`,
    })
      .then((payload) =>
        dispatch({ type: 'FETCHING_ARTICLE_SUCCESS', payload: payload.data })
      )
      .catch((err) => {
        dispatch({
          type: 'FETCHING_ARTICLE_FAILURE',
          error: err,
        });
      });
  };
};
