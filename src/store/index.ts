import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { api } from '@/api';
import { globalReducer, listReducer } from './features'
export const store = configureStore({
  reducer: {
    global: globalReducer,
    list: listReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => [api.middleware, ...getDefaultMiddleware()],
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;