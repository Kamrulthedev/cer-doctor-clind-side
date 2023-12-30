import { useContext } from "react";
import { AuthContext } from "../Provides/AuthProvideres";
import { Navigate } from "react-router-dom";


const ProveateRout = ({children}) => {
    const {user, loding} = useContext(AuthContext)


    if(loding){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to={"/Login"}></Navigate>;
};

export default ProveateRout;
