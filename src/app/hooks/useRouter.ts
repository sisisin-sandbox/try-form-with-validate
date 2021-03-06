/* eslint-disable no-restricted-imports */
import { appHistory } from 'app/services/appHistory';
import { useRouteMatch } from 'react-router-dom';

export const useRouter = <T>() => {
  const history = appHistory;

  const location = history.location;
  const { params } = useRouteMatch<T>();

  return {
    params,
    history,
    location,
  };
};
