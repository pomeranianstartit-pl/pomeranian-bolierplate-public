import { Register } from './Register';
import {Login} from './Login';
import { useState } from 'react';

export const AuthUser = () => {
    const [toggle, setToggle] = useState(true);
    return
    <div>{toggle ? <Login goTo Register={() => setToggle(!toggle)}/> : <Register />}</div>;
};