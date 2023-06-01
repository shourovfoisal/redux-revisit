import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy, initiateFbSession } from './redux/counter';
import FlightBooking from './redux/components/FlightBooking';
import { v4 as uuid } from "uuid";

function App() {

  // const [count, setCount] = useState(0);
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const formData = {
    flightName: "Airbus A03",
    bookingDate: "31.05.23",
    passengerName: "Shourov"
  };

  const handleFbSessionInitialization = () => {
    const sessionId = uuid();
    formData.sessionId = sessionId;
    dispatch(initiateFbSession(formData));
  }

  return (
    <>
      <div className="App">
        <h1>The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementBy(10))}>By 10</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={handleFbSessionInitialization}>Start Flight Booking Session</button>
      </div>
      <Routes>
        <Route path='/booking/:sessionId' element={<FlightBooking />} />
      </Routes>
    </>
  );
}

export default App;
