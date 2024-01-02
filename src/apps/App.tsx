import { Link, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navigator } from "./Navigator";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={Navigator} />
    </>
  );
}

export default App;
