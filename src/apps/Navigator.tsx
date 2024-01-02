import { CardDetails } from "@/pages/CardDetails";
import { Home } from "@/pages/Home";

export const Navigator = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/card",
    element: <CardDetails />,
  },
];
