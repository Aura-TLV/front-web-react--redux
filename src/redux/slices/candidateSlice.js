import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    additionalInfo: '',  // Для поля дополнительной информации
    selectedCity: [],    // Для поля городов
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
        // Экшен для изменения additionalInfo
        setAdditionalInfo: (state, action) => {
            state.additionalInfo = action.payload;
        },
        
        // Экшен для переключения города
        toggleCity: (state, action) => {
            const city = action.payload;
            if (state.selectedCity.includes(city)) {
                state.selectedCity = state.selectedCity.filter(item => item !== city);
            } else {
                state.selectedCity.push(city);
            }
        },

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

export const { setAdditionalInfo, toggleCity, toggleWage, toggleWorkingHour, toggleDriver, toggleLunch, toggleLiving } = candidateSlice.actions;

export default candidateSlice.reducer;
