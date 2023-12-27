import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";


const Routers = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/Login',
          element:<Login></Login>
        },
        {
          path:'/SignUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);
export default Routers;