import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  data: [],
  parkDetails: null, // New state to store park details
  loading: false,
  error: null,
};

// Define async thunk for fetching parks
export const fetchParks = createAsyncThunk(
  "parks/fetchParks",
  async (params) => {
    try {
      const options = {
        method: "GET",
        url: "https://developer.nps.gov/api/v1/parks",
        params: params,
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi",
        },
      };

      const response = await axios.request(options);
      const paramsData = params;
      const finalResponse = {
        data: response.data,
        params: paramsData,
      };
      return finalResponse;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchParkDetails = createAsyncThunk(
  "parks/fetchParkDetails", // Corrected action type
  async (parkCode) => { // Changed params to parkCode to fetch details of a specific park
    try {
      const options = {
        method: "GET",
        url: `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}`, // Use correct URL path for park details
        params: {
          // Add any additional params if needed
        },
        headers: {
          "X-Api-Key": "gSwKu55KzwcQZdpTNQqqkG6t0m9orXYbFff25MFi",
        },
      };

      const response = await axios.request(options);
      return response.data; // Return only the data of the park details
    } catch (error) {
      throw error;
    }
  }
);

// Define parks slice
const parksSlice = createSlice({
  name: "parks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchParks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchParks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchParkDetails.pending, (state) => { // Add pending case for fetchParkDetails
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParkDetails.fulfilled, (state, action) => { // Add fulfilled case for fetchParkDetails
        state.loading = false;
        state.parkDetails = action.payload;
      })
      .addCase(fetchParkDetails.rejected, (state, action) => { // Add rejected case for fetchParkDetails
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default parksSlice.reducer;
