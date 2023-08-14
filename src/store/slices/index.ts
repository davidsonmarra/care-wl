import {combineReducers} from '@reduxjs/toolkit';

import profile, * as actions from './profileSlice';

export default combineReducers({profile});

export {actions};
