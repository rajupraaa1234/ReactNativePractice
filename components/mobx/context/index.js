import React,{createContext} from 'react';

import { LoginStore } from '../store/LoginStore';

export const storesContext  = createContext({
    loginStore : new LoginStore(),
});