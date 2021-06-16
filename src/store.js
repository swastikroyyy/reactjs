import { createStore } from "redux";
import rReducer from "./reducers/Redcc";
const store = createStore(rReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;