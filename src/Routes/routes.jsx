import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../component/homePage/Home";

 const routes =createBrowserRouter([
    {
      path: "/",
     element:<MainLayout></MainLayout>,
     children: [
        {
          index:true ,
          element: <Home></Home>,  
        },
    ]
    }
   
  ]);
  export default routes;