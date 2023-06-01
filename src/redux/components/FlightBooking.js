
import React from 'react'
import { useParams } from 'react-router-dom'

const FlightBooking = () => {

    const sessionId = useParams("sessionId");
    console.log(sessionId);

  return (
    <div>FlightBooking</div>
  )
}

export default FlightBooking