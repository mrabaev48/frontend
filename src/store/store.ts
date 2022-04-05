import {combineReducers, configureStore} from "@reduxjs/toolkit";
import positionReducer from './reducers/PositionSlice';


const rootReducer = combineReducers({
    positionReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];