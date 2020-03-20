import React from 'react';
import { useForm } from 'react-hook-form';

export const ValidationWithMultiValue: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [state, setState] = React.useState({});
  const [extraError, setExtraError] = React.useState<string | null>(null);

  return (
    <div>
      <pre>{JSON.stringify(state, null, '  ')}</pre>
      <form
        onSubmit={handleSubmit(
          React.useCallback((data) => {
            if (data.ex === data.exr) {
              setState(data);
            } else {
              setExtraError('ex and exr must be same value');
            }
          }, []),
        )}
      >
        <div>
          <input name="ex" defaultValue="test" ref={register}></input>
        </div>
        <div>
          <input name="exr" ref={register({ required: true })}></input>
          {errors.exr && <span>This field is required</span>}
        </div>
        {extraError && <span>{extraError}</span>}
        <input type="submit"></input>
      </form>
    </div>
  );
};
