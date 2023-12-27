import { createContext, useState } from "react";
import auth from "../fierbase/Fierbase.config";

export const AuthContext = createContext()

const AuthProvideres = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)




    const authInfo = {
        user,
        loding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvideres;