import { AuthChecker } from 'type-graphql';
import { Context } from '../pages/api/graphql';

export const userAuthChecker: AuthChecker<Context> = (
  { context: { session } },
  roles,
): boolean => {
  const role = session?.role || '';

  if (!session?.user) {
    return false;
  }

  if (role && roles.includes(String(role))) {
    // grant access if the roles overlap
    return true;
  }

  return false; // or false if access is denied
};
