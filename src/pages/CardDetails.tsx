import { Link } from "react-router-dom";

export function CardDetails(props) {
  return (
    <div className="vstack justify-center items-center align-middle">
      <div className="hstack gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/card"}>Card</Link>
      </div>
      <div className="w-[300px] px-4 py-4 bg-blue-500">Card</div>
    </div>
  );
}
