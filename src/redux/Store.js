import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";

export let Store = legacy_createStore(
    reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)