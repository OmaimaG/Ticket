// store/index.js
import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./page/dashboard/ticketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

export default store;
