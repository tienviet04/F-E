import React from "react";
import ReactDOM from "react-dom/client";
import { routers } from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { LoadingProvider } from "./contexts/loadingContext";
import { MoviesProvider } from "./contexts/moviesContext";
import { UserProvider } from "./contexts/userContext";
import instance from "./api/interface";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MoviesProvider>
    <UserProvider>
      <LoadingProvider>
        <RouterProvider router={routers} />
      </LoadingProvider>
    </UserProvider>
  </MoviesProvider>
);
