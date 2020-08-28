import React from "react";
import "./App.css";
import Nav from "./components/NavBar";
import NewBookingForm from "./components/NewBookingForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import BookingContextProvider from "./context/BookingsContext";
import SeatingPage from "./components/SeatingPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Container className="App">
      <Router>
        <Nav />
        <Switch>
          <BookingContextProvider>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/addBooking">
              <NewBookingForm />
            </Route>
            <Route path="/seatingPage">
              <SeatingPage />
            </Route>
          </BookingContextProvider>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
