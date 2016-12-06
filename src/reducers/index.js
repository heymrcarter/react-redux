import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajax from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajax

});

export default rootReducer;
