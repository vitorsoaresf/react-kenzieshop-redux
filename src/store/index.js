import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/cart/reducer";
import productReducer from "./modules/products/reducer";
const reducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
