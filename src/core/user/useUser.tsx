import { useContext } from 'react';
import { UserContext } from './UserContext';

export function useUser(): number {
  return useContext(UserContext);
}
