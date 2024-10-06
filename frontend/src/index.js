import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
import SimulatorGasGiantPage from "./pages/simulatorGasGiantPage";
import SimulatorEarthTypePage from "./pages/simulatorEarthTypePage";
import ExoplanetPage from "./pages/exoplanetPage";
import GeneratePage from "./pages/generatePage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainPage />,
            errorElement: <div>404 Not Found</div>,
        },
        {
            path: "/simulator/gasgiant",
            element: <SimulatorGasGiantPage />,
        },
        {
            path: "/simulator/earthtype",
            element: <SimulatorEarthTypePage />,
        },
        {
            path: "/exoplanet/:planetName/:textureImage",
            element: <ExoplanetPage />,
        },
        {
            path: "/generate/:planetName/:planetType/:imageName/:cloudsCount",
            element: <GeneratePage />,
        },
    ],
    {
        basename: "/stellar-quest",
    }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
