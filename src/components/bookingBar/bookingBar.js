import React from "react";
import { AiFillCar, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import "./bookingBar.css";

const bookingeBar = () => {
  return (
    <div className="booking-rectangle-bar">
      <div className="radio-buttons">
        <input type="radio" name="trip-type" id="one-way" checked />
        <label htmlFor="one-way" style={{ fontSize: "16px" }}>
          One-way
        </label>
        <input type="radio" name="trip-type" id="return" />
        <label htmlFor="return" style={{ fontSize: "16px" }}>
          Return
        </label>
      </div>
      <div className="line-bar" />

      <div>
        <AiFillCar
          style={{ fontSize: "2rem", position: "relative", top: "1.5rem" }}
        />
      </div>

      <div className="booking-data">
        <div className="from-to">From</div>
        <div className="address">London Luton Airport (LTN)</div>
      </div>

      <div className="vertical-line" />

      <div>
        <AiFillCar
          style={{ fontSize: "2rem", position: "relative", top: "1.5rem" }}
        />
      </div>
      <div className="booking-data">
        <div className="from-to">To</div>
        <div className="address">London Luton Airport (LTN)</div>
      </div>

      <div className="vertical-line" />

      <div className="booking-data">
        <div className="from-to">Dates-Time</div>

        <div className="date-time">23</div>
        <div className="day">September</div>
        <div className="time">Wed , 13:00</div>

        <button className="return-button">Add Return</button>
      </div>

      <div className="vertical-line" />

      <div style={{ fontSize: "2rem", position: "relative", top: "1.5rem" }}>
        <FaUserFriends />
      </div>

      <div className="booking-data" style={{width:'5%'}}>
        <div className="from-to">Passenger</div>
        <div className="address">1 Person</div>
      </div>

      <button className="search-button">
        <AiOutlineSearch style={{fontSize: "2rem"}} />
      </button>

      {/* <div className="from-to">
        <div className="from">
          <label htmlFor="from">From</label>
          <input type="text" name="from" id="from" />
        </div>
        <div className="to">
          <label htmlFor="to">To</label>
          <input type="text" name="to" id="to" />
        </div>
      </div>
      <div className="date-time">
        <div className="departure-date">
          <label htmlFor="departure-date">Departure date</label>
          <input type="date" name="departure-date" id="departure-date" />
        </div>
        <div className="return-date">
          <label htmlFor="return-date">Return date</label>
          <input type="date" name="return-date" id="return-date" disabled />
        </div>
        <div className="departure-time">
          <label htmlFor="departure-time">Departure time</label>
          <input type="time" name="departure-time" id="departure-time" />
        </div>
        <div className="return-time">
          <label htmlFor="return-time">Return time</label>
          <input type="time" name="return-time" id="return-time" disabled />
        </div>
      </div>
      <div className="return-button">
        <button disabled>Return</button>
      </div>
      <div className="passenger-selection">
        <div className="adults">
          <label htmlFor="adults">Adults</label>
          <select name="adults" id="adults">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="children">
          <label htmlFor="children">Children</label>
          <select name="children" id="children">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="infants">
          <label htmlFor="infants">Infants</label>
          <select name="infants" id="infants">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div className="search-button">
        <button>Search</button>
      </div> */}
    </div>
  );
};

export default bookingeBar;
