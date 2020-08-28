import React, { useContext } from "react";
import BookingDetails from "./BookingDetails";
import { BookingContext } from "../context/BookingsContext";
import { Table } from "semantic-ui-react";

export default function SeatingPage() {
  const { bookings } = useContext(BookingContext);
  return bookings.length ? (
    <Table celled>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name </Table.HeaderCell>
        <Table.HeaderCell>Dining Date</Table.HeaderCell>
        <Table.HeaderCell>Number of covers</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
        <Table.HeaderCell>E-mail </Table.HeaderCell>
        <Table.HeaderCell>status</Table.HeaderCell>
      </Table.Row>

      {bookings.map((booking) => (
        <BookingDetails booking={booking} key={booking.id} />
      ))}
    </Table>
  ) : (
    <div>No Booking </div>
  );
}
