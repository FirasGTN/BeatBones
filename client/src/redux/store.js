import { applyMiddleware, createStore } from "redux";
import ToDoReducer from "./reducers/ToDoReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(ToDoReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store