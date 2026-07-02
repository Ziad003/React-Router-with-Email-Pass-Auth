import { createBrowserRouter } from "react-router";
import Root from "../Components/Layout/Root";
import Home from "../Components/Pages/Home/Home";
import Links from "../Components/Pages/Links/Links";
import LogIn from "../Components/Pages/Links/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/links", Component: Links },
      {path:'/logIn', Component: LogIn}
    ],
  },
]);
