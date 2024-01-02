import { CardDetails } from "@/pages/CardDetails";
import { Home } from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const Navigator = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/card",
    element: <CardDetails />,
  },
]);
