import { combineReducers } from 'redux';

import articlesReducer from './articles';
import articleReducer from './article';

const rootReducer = combineReducers({
  articlesReducer,
  articleReducer
});

export default rootReducer;
