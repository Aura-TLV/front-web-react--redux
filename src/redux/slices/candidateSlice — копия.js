import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedWages: [],
    selectedWorkingHours: [],
    selectedDriver: [],
    selectedLunch: [],
    selectedLiving: [],
};

const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        toggleWage: (state, action) => {
            const wage = action.payload;
            state.selectedWages = state.selectedWages.includes(wage)
                ? state.selectedWages.filter(item => item !== wage)
                : [...state.selectedWages, wage];
        },
        toggleWorkingHour: (state, action) => {
            const hour = action.payload;
            state.selectedWorkingHours = state.selectedWorkingHours.includes(hour)
                ? state.selectedWorkingHours.filter(item => item !== hour)
                : [...state.selectedWorkingHours, hour];
        },
        toggleDriver: (state, action) => {
            const driver = action.payload;
            state.selectedDriver = state.selectedDriver.includes(driver)
                ? state.selectedDriver.filter(item => item !== driver)
                : [...state.selectedDriver, driver];
        },
        toggleLunch: (state, action) => {
            const lunch = action.payload;
            state.selectedLunch = state.selectedLunch.includes(lunch)
                ? state.selectedLunch.filter(item => item !== lunch)
                : [...state.selectedLunch, lunch];
        },
        toggleLiving: (state, action) => {
            const living = action.payload;
            state.selectedLiving = state.selectedLiving.includes(living)
                ? state.selectedLiving.filter(item => item !== living)
                : [...state.selectedLiving, living];
        },
    },
});

export const { toggleWage, toggleWorkingHour, toggleDriver, toggleLunch, toggleLiving } = candidateSlice.actions;

export default candidateSlice.reducer;
