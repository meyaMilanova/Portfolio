import { useState } from 'react'
import React from "react";
import './style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";


const router = createBrowserRouter ([{
    element: <Layout/>,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path: "/About",
            element: <About/>
        },
        {
            path: "/Projects",
            element: <Projects/>
        },
        {
            path: "/Contact",
            element: <Contact/>
        }
    ]
}],
{ basename: "/Portfolio" }
)

function App() {
    return <RouterProvider router={router} />;
}

export default App