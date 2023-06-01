
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { createFbSession, updateFbSession } from '../redux/session';

const FlightBooking = () => {

  const dispatch = useDispatch();
  const {flightBookingSessions} = useSelector(state => state.session);

  const {sessionId} = useParams("sessionId");

  const handleChange = (fieldName, fieldValue) => {
    dispatch(updateFbSession({sessionId, fieldName, fieldValue}));
    console.log(flightBookingSessions[sessionId])
  }

  // useEffect(() => {
  //   dispatch(createFbSession(sessionId));
  // }, []);

  return (
    <div>
      <form>
        <div>
          <label htmlFor='flightName'>Flight Name</label>
          <input 
            id='flightName' 
            type='text' 
            value={flightBookingSessions[sessionId]?.flightName}
            onChange={(e) => handleChange('flightName', e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor='bookingDate'>Booking Date</label>
          <input 
            id='bookingDate' 
            type='text'
            value={flightBookingSessions[sessionId]?.bookingDate}
            onChange={(e) => handleChange('bookingDate', e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor='passengerName'>Passenger Name</label>
          <input 
            id='passengerName' 
            type='text'
            value={flightBookingSessions[sessionId]?.passengerName}
            onChange={(e) => handleChange('passengerName', e.target.value)} 
          />
        </div>
      </form>
    </div>
  )
}

export default FlightBooking