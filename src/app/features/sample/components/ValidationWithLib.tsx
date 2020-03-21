import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  name: yup.string().required(),
});
type Form = yup.InferType<typeof schema>;

export const ValidationWithLib: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Form>({
    validationSchema: schema,
  });
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div>
      <pre>{JSON.stringify(state, null, '  ')}</pre>
      <form
        onSubmit={handleSubmit(
          React.useCallback((data) => {
            setState(data);
          }, []),
        )}
      >
        <div>
          <input name="name" placeholder="name" ref={register}></input>
          {errors.name && <span>{errors.name?.message}</span>}
        </div>
        <div>
          <input name="age" placeholder="age" ref={register}></input>
          {errors.age && <span>{errors.age?.message}</span>}
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
};
