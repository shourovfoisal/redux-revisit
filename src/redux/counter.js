import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        flightBookingSession: {
            flightName: "",
            bookingDate: "",
            passengerName: ""
        }
    },
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        incrementBy: (state, action) => { state.count += action.payload }
    }
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;