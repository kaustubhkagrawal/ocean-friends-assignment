import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="vstack gap-5">
        <div className="hstack gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/card"}>Card</Link>
        </div>
        <div className="hstack gap-4 h-80">
          <div className="w-[300px] px-4 py-4 bg-blue-500 -rotate-90">Card</div>
        </div>
      </div>
    </>
  );
}
