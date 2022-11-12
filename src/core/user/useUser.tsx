import { useContext } from 'react';
import { UserContext } from './UserContext';

export function useUser(): string {
  return useContext(UserContext);
}
