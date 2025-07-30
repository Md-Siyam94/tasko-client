
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/pages/Home/Home";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import PrivetRoute from "./PrivetRoute";
import TaskDetails from "../components/pages/Details/TaskDetails";
import Error from "../components/shared/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/details/:id',
          element: <TaskDetails></TaskDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_baseAPI}/task/details/${params.id}`)

        }
    ]
  },
  {
    path: '/login',
    element: <LogIn></LogIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
]);

export default router