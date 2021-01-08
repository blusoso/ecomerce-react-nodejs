import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        setUserInfo(localStorage.getItem("userInfo"));
    }, [])

    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>
            {children}
        </UserContext.Provider>
    );
};
