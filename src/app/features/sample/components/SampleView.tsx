import React from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from 'typeless';
import { getSampleState, SampleActions, SampleForm } from '../interface';
import { ValidationWithMultiValue } from './ValidationWithMultiValue';
import { Mat } from './Mat';

export const SampleView = () => {
  const { register, handleSubmit, errors } = useForm<SampleForm>();
  const { formSubmitted } = useActions(SampleActions);

  return (
    <div>
      <Mat></Mat>
      <hr></hr>

      <pre>{JSON.stringify(getSampleState.useState().form, null, '  ')}</pre>
      <form
        onSubmit={handleSubmit(
          React.useCallback(
            (data) => {
              formSubmitted(data);
            },
            [formSubmitted],
          ),
        )}
      >
        <div>
          <input name="ex" defaultValue="test" ref={register}></input>
        </div>
        <div>
          <input name="exr" ref={register({ required: true })}></input>
          {errors.exr && <span>This field is required</span>}
        </div>
        <div>
          <input
            name="v"
            ref={register({
              validate: async (data) => data === 'hoge' || 'this field must be `hoge`',
            })}
          ></input>
          {errors.v && <span>{errors.v.message}</span>}
        </div>
        <input type="submit"></input>
      </form>
      <hr></hr>
      <ValidationWithMultiValue></ValidationWithMultiValue>
    </div>
  );
};
