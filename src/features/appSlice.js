import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

//actions
export const { setChannelInfo } = appSlice.actions;
//states
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
//define
export default appSlice.reducer;