import { createSlice } from "@reduxjs/toolkit";

const singleMeal = createSlice({
    name: 'singleMeal',
    initialState: { value: [] },
    reducers: {
        singleMealObject: (state, action) => {
            state.value=action.payload
        },
        resetObj: (state) => {
            state.value=[]
        }
    }
})
export default singleMeal.reducer

export const {singleMealObject,resetObj} =singleMeal.actions