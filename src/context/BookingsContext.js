import React, { createContext, useReducer, useEffect } from "react";
import { bookingsReducer } from "../reducers/BookingsReducers";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const [bookings, dispatch] = useReducer(bookingsReducer, [], () => {
    const localData = localStorage.getItem("bookings");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);
  return (
    <BookingContext.Provider value={{ bookings, dispatch }}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
