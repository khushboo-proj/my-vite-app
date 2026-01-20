// import {createstore} from "react-redux";
// import reducerfn from "./reducerfn";
//  const store = createstore(reducerfn)
//  export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducerfn from "./reducerfn";

const store = configureStore({
  reducer: reducerfn
});

export default store;
