import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [theme, setTheme] = React.useState(true)
    return(
        <UserContext.Provider value={{theme, setTheme}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider