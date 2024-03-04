import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Rules from "./components/Rules/Rules.tsx";
import Game from "./components/Game/Game.tsx";
import Home from "./components/Home/Home.tsx";
import JoinRoom from "./components/JoinRoom.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/join-room",
    element: <JoinRoom />,
  },
  {
    path: "/game/:roomId",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
