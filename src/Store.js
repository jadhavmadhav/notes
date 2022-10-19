import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducer";

const Meddleware = [thunk]

const Store =legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(...Meddleware)))

export default Store