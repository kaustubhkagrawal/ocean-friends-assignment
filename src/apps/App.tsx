import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import { Navigator } from "./Navigator";

function App() {
  // const [count, setCount] = useState(0);

  const element = useRoutes(Navigator);

  const location = useLocation();
  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
