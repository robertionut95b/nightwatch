import { User } from '@prisma/client';

interface IUseUserManipulationResults {
  updateUser: (user: User) => void;
  deleteUser: (user: User) => void;
}

const useUserManipulation = (): IUseUserManipulationResults => {
  return {
    updateUser: (user: User): void => {},
    deleteUser: (user: User): void => {},
  };
};

export default useUserManipulation;
