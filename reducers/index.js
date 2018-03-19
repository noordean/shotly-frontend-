import { combineReducers } from 'redux';

import { shortenedUrl } from './url';
import { userRegistration } from './user';
import { userLogin } from './user';
import { getUrls } from './url';

export default combineReducers({
  shortenedUrl,
  userRegistration,
  userLogin,
  userUrls: getUrls
});
