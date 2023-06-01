import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        flightBookingSessions: {}
    },
    reducers: {
        updateFbSession: (state, action) => {

            const {sessionId, fieldName, fieldValue} = action.payload;
            const flightBookingInfo = {...state.flightBookingSessions[sessionId]};
            
            flightBookingInfo[fieldName] = fieldValue;
            state.flightBookingSessions[sessionId] = flightBookingInfo;
            
        },
        // createFbSession: (state, action) => {
        //     const sessionId = action.payload;
        //     console.log(sessionId)
        //     state.flightBookingSessions[sessionId]={
        //         flightName: "",
        //         bookingDate: "",
        //         passengerName: ""
        //     };
        // }
    }
});

export const {updateFbSession, createFbSession} = sessionSlice.actions
export default sessionSlice.reducer