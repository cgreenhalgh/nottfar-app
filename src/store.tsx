import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './data/reducer';

const rootReducer = combineReducers({
  data: dataReducer
})

export default configureStore({
  reducer: rootReducer
});

//export type RootState = ReturnType<typeof rootReducer>
//export type AppDispatch = typeof store.dispatch
