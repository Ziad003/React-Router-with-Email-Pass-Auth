import { createBrowserRouter } from "react-router";
import Root from "../Components/Layout/Root";
import Home from "../Components/Pages/Home/Home";
import Links from "../Components/Pages/Links/Links";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/links", Component: Links },
    ],
  },
]);
