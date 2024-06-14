import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './pages/App.jsx'
import './index.css'
import RootLayout from "./pages/Rootlayout.jsx";
import Error from "./pages/Error.jsx";
import Zalogowanypoprawnie from "./pages/Zalogowanypoprawnie.jsx";
import {Login} from "./pages/Login.jsx";
import Buty from "./pages/Buty.jsx";
import Szczegoly from "./pages/Szczegoly.jsx";
import Dodaj from "./pages/Dodaj.jsx";
import 'bootstrap/dist/css/bootstrap.css';

let router=createBrowserRouter([
    {
        path: "/",

        element: <RootLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/zalogowanypoprawnie",
                element: <Zalogowanypoprawnie/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: '/szafa',
                element: <Buty/>
            },
            {
                path: '/buty/:name',
                element: <Szczegoly/>
            },
            {
                path: '/dodaj',
                element: <Dodaj/>
            }
        ]
    },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
