import React, { useContext } from "react";
import { Table, Radio } from "semantic-ui-react";
import { BookingContext } from "../context/BookingsContext";

const BookingDetails = ({ booking }) => {
  const { dispatch } = useContext(BookingContext);
  return (
    <Table.Row>
      <Table.Cell>{booking.firstName}</Table.Cell>
      <Table.Cell>{booking.lastName}</Table.Cell>
      <Table.Cell>{booking.diningDate}</Table.Cell>
      <Table.Cell>{booking.numberOfCovers}</Table.Cell>
      <Table.Cell>{booking.phoneNumber}</Table.Cell>
      <Table.Cell>{booking.email}</Table.Cell>
      <Table.Cell>
        <Radio
          toggle
          onClick={() => dispatch({ type: "MARK_SEATED", id: booking.id })}
          checked={booking.arrivedAndSeated}
        ></Radio>
      </Table.Cell>
    </Table.Row>
  );
};

export default BookingDetails;
