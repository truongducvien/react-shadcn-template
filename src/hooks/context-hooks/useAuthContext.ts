import { useContext } from 'react';

import { AuthContext, IAuthContext } from '@/contexts/auth.context';

const useAuthContext = () => useContext<IAuthContext>(AuthContext);

export default useAuthContext;
