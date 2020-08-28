import React, { useState, useContext } from "react";
import { Form, Input, Grid, GridRow, Button } from "semantic-ui-react";
import { BookingContext } from "../context/BookingsContext";

export default function NewBookingForm() {
  const { dispatch } = useContext(BookingContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberOfCovers, setNumberOfCovers] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [diningDate, setDiningDate] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    dispatch({
      type: "ADD_BOOKING",
      booking: {
        firstName,
        lastName,
        numberOfCovers,
        phoneNumber,
        email,
        diningDate,
      },
    });
    setFirstName("");
    setLastName("");
    setNumberOfCovers("");
    setPhoneNumber("");
    setEmail("");
    setDiningDate("");
  };

  //   const handleInputChange = (event) => {
  //     event.persist();
  //     setInputs((inputs) => ({
  //       [event.target.name]: event.target.value,
  //     }));
  //   };
  return (
    <div>
      <Form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Grid stackable centered columns="equal">
          <GridRow centered>
            <Form.Field
              control={Input}
              label="First Name"
              inline
              placeholder="Full Name"
              value={firstName}
              iconPosition="left"
              name="firstName"
              required
              onChange={(e) => setFirstName(e.target.value)}
              icon="user"
            />
          </GridRow>
          <GridRow centered>
            <Form.Field
              label="Last name"
              control={Input}
              inline
              placeholder="Last name"
              iconPosition="left"
              value={lastName}
              name="lastName"
              required
              onChange={(e) => setLastName(e.target.value)}
              icon="user"
              color="blue"
            />
          </GridRow>
          <GridRow centered>
            <Form.Field
              label="Dining Date"
              inline
              value={diningDate}
              control={Input}
              type="date"
              name="diningDate"
              onChange={(e) => setDiningDate(e.target.value)}
              required
            />
          </GridRow>
          <GridRow centered>
            <Form.Field
              label="Number Of Covers"
              inline
              control={Input}
              placeholder="Number Of Covers"
              iconPosition="left"
              icon="group"
              name="numberOfCovers"
              value={numberOfCovers}
              type="number"
              required
              onChange={(e) => setNumberOfCovers(e.target.value)}
            ></Form.Field>
          </GridRow>
          <GridRow centered>
            <Form.Field
              inline
              label="Phone Number"
              control={Input}
              placeholder="Phone Number"
              iconPosition="left"
              icon="phone"
              name="phoneNumber"
              value={phoneNumber}
              type="Number"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Form.Field>
          </GridRow>
          <GridRow centered>
            <Form.Field
              icon="at"
              inline
              iconPosition="left"
              control={Input}
              value={email}
              name="email"
              label="Email"
              type="Email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </GridRow>
          <Grid.Row>
            <Button color="blue">Submit</Button>
          </Grid.Row>
        </Grid>
      </Form>
    </div>
  );
}
