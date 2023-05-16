import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  let test = true;

  const routes = test ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...publicRoutes]);

  return <>{element}</>;
};
