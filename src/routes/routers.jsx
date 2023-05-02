import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Shared/Home";
import Main from "../components/Shared/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default router;