import { configureStore, combineReducers } from '@reduxjs/toolkit';

export interface DummyState {
}
const initialState: DummyState = {}

export const DUMMY_ACTION = "DUMMY_ACTION"
interface DummyAction {
  type: typeof DUMMY_ACTION
  foo: string
}
export type DummyActionTypes = DummyAction // | ...

export function dummyReducer(
  state = initialState, 
  action: DummyActionTypes ): DummyState {
  return state; 
}

const rootReducer = combineReducers({
  dummy: dummyReducer
})

export default configureStore({
  reducer: rootReducer
});

//export type RootState = ReturnType<typeof rootReducer>
//export type AppDispatch = typeof store.dispatch
