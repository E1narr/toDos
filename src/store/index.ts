import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { loadState, saveState } from '../utils/localStore';

const preloadedState = loadState<ReturnType<typeof rootReducer>>('appState');

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  saveState('appState', store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;