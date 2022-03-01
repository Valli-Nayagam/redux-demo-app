import { createStore } from "redux";
import carReducer from "./Cars/carReducer";

const store = createStore(carReducer)

export default store