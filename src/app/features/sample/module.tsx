import React from 'react';
import { SampleView } from './components/SampleView';
import { handle, SampleState, SampleActions } from './interface';

// --- Epic ---
export const epic = handle.epic();

// --- Reducer ---
const initialState: SampleState = {
  form: {},
};

export const reducer = handle.reducer(initialState).on(SampleActions.formSubmitted, (state, { form }) => {
  state.form = form;
});

export const SampleModule = () => {
  handle();
  return <SampleView />;
};
