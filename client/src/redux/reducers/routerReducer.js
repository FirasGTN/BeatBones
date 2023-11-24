import { combineReducers } from "redux";
import userReducer from "./userReducer";
import ToDoReducer from "./ToDoReducer";
import AccountReducer from "./AccountReducer"
const rootReducer = combineReducers({
  user: userReducer,
  product: ToDoReducer,
  userShow: AccountReducer,
});

export default rootReducer;
