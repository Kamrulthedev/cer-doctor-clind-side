import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import ErrorPages from "../ErrorPage/ErrorPages";
import About from "../Pages/About/About";



const Routers = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: <ErrorPages></ErrorPages>,
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
        },
        {
          path:'/About',
          element:<About></About>
        }
      ]
    },
  ]);
export default Routers;