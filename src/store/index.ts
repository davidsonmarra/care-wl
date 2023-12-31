import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';

import sagas from './sagas';
import reducers from './slices';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware, ...(__DEV__ ? [logger] : [])],
});

sagaMiddleware.run(sagas);

export type RootStateProps = ReturnType<typeof reducers>;

export {actionsProfile, actionsScheduleAppointment} from './slices';
