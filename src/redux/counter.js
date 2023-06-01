import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        flightBookingSession: {
            sessionId: "",
            flightName: "",
            bookingDate: "",
            passengerName: ""
        }
    },
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        incrementBy: (state, action) => { state.count += action.payload },
        initiateFbSession: (state, action) => {
            state.flightBookingSession.sessionId = action.payload.sessionId;
            state.flightBookingSession.flightName = action.payload.flightName;
            state.flightBookingSession.bookingDate = action.payload.bookingDate;
            state.flightBookingSession.passengerName = action.payload.passengerName;
        }
    }
});

export const { increment, decrement, incrementBy, initiateFbSession } = counterSlice.actions;
export default counterSlice.reducer;