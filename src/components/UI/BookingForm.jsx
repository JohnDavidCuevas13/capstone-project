import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block">
        <input type="text" placeholder="First Name" id="firstName" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block">
        <input type="text" placeholder="Last Name" id="lastName" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block">
        <input type="email" placeholder="Email" id="email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block">
        <input type="number" placeholder="Phone Number" id="phoneNumber" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block">
        <input type="text" placeholder="From Address" id="fromAddress" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block">
        <input type="text" placeholder="To Address" id="toAddress" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block">
        <select name="person" id="personSelect">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block">
        <select name="luggage" id="luggageSelect">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block">
        <input type="date" placeholder="Start Date" id="startDate" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block">
        <input type="date" placeholder="End Date" id="endDate" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          id="journeyTime"
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block">
        <input type="file" accept="image/*" id="uploadImage" />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          id="additionalInfo"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
