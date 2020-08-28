import { v4 as uuidv4 } from "uuid";
export const bookingsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      return [
        ...state,
        {
          firstName: action.booking.firstName,
          lastName: action.booking.lastName,
          numberOfCovers: action.booking.numberOfCovers,
          phoneNumber: action.booking.phoneNumber,
          email: action.booking.email,
          diningDate: action.booking.diningDate,
          arrivedAndSeated: action.booking.arrivedAndSeated,
          id: uuidv4(),
        },
      ];
    default:
      return state;
  }
};
