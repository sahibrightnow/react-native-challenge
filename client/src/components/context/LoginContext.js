import React, { useState } from 'react';
export const LoginContext = React.createContext()

export const LoginProvider = (props) => {
 
 
    const [userToken, setUserToken] = useState();


    return (
        <LoginContext.Provider value={[ userToken, setUserToken]}>
            {props.children}
        </LoginContext.Provider>
    );
} 