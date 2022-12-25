import { RootState } from '../store';

export const isEmailInputDisabled = (state: RootState) => state.form.inputs['email-input'].disabled;
export const isDriverInputDisabled = (state: RootState) =>
  state.form.inputs['driverLicenseCheck-input'].disabled;
