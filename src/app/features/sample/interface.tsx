import { createModule } from 'typeless';
import { SampleSymbol } from './symbol';

// --- Actions ---
export const [handle, SampleActions, getSampleState] = createModule(SampleSymbol)
  .withActions({ formSubmitted: (form: SampleForm) => ({ payload: { form } }) })
  .withState<SampleState>();

// --- Types ---
export type SampleForm = { ex: string; exr: string }; // Record<string, any>;
export interface SampleState {
  form: SampleForm | {};
}
