import { ReactNode, useCallback, useMemo } from 'react';
import { getLoggedUserId } from 'utils/getLoggedUserId';
import { UserContext } from './UserContext';

export function UserProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const userId = useMemo(() => String(getLoggedUserId()), []);

  return <UserContext.Provider value={userId}>{children}</UserContext.Provider>;
}
