import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllData = createAsyncThunk('gitUser', async (args, {rejectWithValue}) => {
    const response = await fetch('https://api.github.com/users');
    try {
        const data = response.json();
        return data;
    } catch (error) {
        return rejectWithValue("Opps! Something went wrong. Please try again later.");
    }
    
})

 const gitUser = createSlice({
    name: "gitUser",
    initialState: {
        users : [],
        loading : false,
        error : null
    },
    extraReducers: (builder) => {
        builder.addCase(getAllData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllData.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            
        })
        builder.addCase(getAllData.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        })
      },

})

export default gitUser.reducer;
