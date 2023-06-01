import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from './redux/counter';
import FlightBooking from './components/FlightBooking';
import { v4 as uuid } from "uuid";
import { useState } from 'react';

function App() {

  // const [count, setCount] = useState(0);
  const [links, setLinks] = useState([uuid(), uuid(), uuid()]);
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <h1>The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementBy(10))}>By 10</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        {/* <Link to={`/booking/${uuid()}`}>Flight Booking</Link> */}
        {
          links.map((link, idx) => <><Link to={`/booking/${link}`}>Link {idx}</Link><br /></>)
        }
      </div>
      <Routes>
        <Route path='/booking/:sessionId' element={<FlightBooking />} />
      </Routes>
    </>
  );
}

export default App;
