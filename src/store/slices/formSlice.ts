import { createSlice } from '@reduxjs/toolkit';

type Props = {
  checkbox: {
    [key: string]: {
      checked: boolean;
      controlled: string;
    };
  };
  inputs: {
    [key: string]: {
      disabled: boolean;
    };
  };
};

const initialState: Props = {
  checkbox: {
    'subscribe-checkbox': {
      checked: false,
      controlled: 'email-input'
    },
    'driverLicenseCheck-checkbox': {
      checked: false,
      controlled: 'driverLicenseCheck-input'
    }
  },
  inputs: {
    'email-input': {
      disabled: true
    },
    'driverLicenseCheck-input': {
      disabled: true
    }
  }
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeInputs: (state, action) => {
      const controlledInput = state.checkbox[action.payload.checkboxName]?.controlled;
      const isChecked = state.checkbox[action.payload.checkboxName]?.checked;

      state.checkbox[action.payload.checkboxName].checked = !isChecked;
      state.inputs[controlledInput].disabled = !state.inputs[controlledInput]?.disabled;
    }
  }
});

export const { changeInputs } = formSlice.actions;
export default formSlice.reducer;
