import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvideres";
import { Navigate, useLocation } from "react-router-dom";


const ProveateRout = ({children}) => {
    const {user, loding} = useContext(AuthContext)
    const location  = useLocation()
    console.log(location.pathname)


    if(loding){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={"/Login"}></Navigate>;
};

export default ProveateRout;
