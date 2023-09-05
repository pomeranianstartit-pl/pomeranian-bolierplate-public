import { createSlice } from '@reduxjs/toolkit';

const defaultUserProfile = 'business';

export const testSlice = createSlice({
  name: 'store-test',
  initialState: {
    userProfile: defaultUserProfile,
    name: 'Adam',
    role: 'trainee'
  },
  reducers: {
    toggleProfile: (sliceState) => {
      if (sliceState.userProfile === 'retail') {
        sliceState.userProfile = 'business';
      } else {
        sliceState.userProfile = 'retail';
      }
    },
  },
});

export const { toggleProfile } = testSlice.actions;
export const selectProfile = (state) => {
  return state.testSlice.userProfile || defaultUserProfile;
};

