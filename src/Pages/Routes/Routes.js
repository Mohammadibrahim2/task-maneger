import { createBrowserRouter } from "react-router-dom";
import Details from "../../Details/DEtails";
import Main from "../../Layout/Main/Main";
import AddTask from "../Add Task/AddTask";
import CompletedTask from "../CompletedTask/CompletedTask";
import Header from "../Header/Header/Header";
import Login from "../Login/Login";
import MyTask from "../MyTask/MyTask";
import Register from "../Register/Register";
import UpdateData from "../Update/UpdateData";

export const router=createBrowserRouter([


    {
        path:"/",
        element:<Main></Main>,
        children:[

            {
                path:"/",
                element:<Header></Header>
            },
            {
                path:"/addtask",
                element:<AddTask></AddTask>
            },
            {
                path:"/mytask",
                element:<MyTask></MyTask>
            },
            {
                path:"/completed",
                element:<CompletedTask></CompletedTask>
            },
                
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/sinup",
                element:<Register></Register>
            },
            {
                path:"/update/:id",
                element:<UpdateData></UpdateData>,
                loader:({params})=>fetch(`https://task-management-server-steel.vercel.app/completed/${params.id}`)
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader:({params})=>fetch(`https://task-management-server-steel.vercel.app/details/${params.id}`)
            },
           



        ]
    }


])