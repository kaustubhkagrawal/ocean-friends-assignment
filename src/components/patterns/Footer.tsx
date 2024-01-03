import NavHomeIcon from "@/assets/images/nav_home_icon.png";
import NavScanIcon from "@/assets/images/nav_scan_icon.png";
import NavHistoryIcon from "@/assets/images/nav_history_icon.png";
import NavMenuIcon from "@/assets/images/nav_menu_icon.png";
import { useLocation } from "react-router-dom";

const footerData = [
  { key: "home", pathName: "/", icon: NavHomeIcon },
  { key: "scan", pathName: "/scan", icon: NavScanIcon },
  { key: "history", pathName: "/history", icon: NavHistoryIcon },
  { key: "menu", pathName: "/menu", icon: NavMenuIcon },
];

export function Footer() {
  const location = useLocation();

  return (
    <footer className="w-full h-20 fixed left-0 right-0 bottom-0 z-1 bg-gradient-to-b rounded-t-3xl from-[#2c3657] to-[#141d33]">
      <div className="layout-container hstack gap-8 py-3 px-4 justify-around ">
        {footerData.map((navItem) => (
          <div
            key={navItem.key}
            title={navItem.key}
            className={`w-14 h-14 flex items-center justify-center rounded-full shadow ${
              location.pathname === navItem.pathName
                ? "bg-gradient-to-b from-blue-400 to-violet-500 "
                : ""
            }`}
          >
            <img className="w-5 h-5 shadow" src={navItem.icon} />
          </div>
        ))}

        {/* <img
            className="w-5 h-5 left-[19px] top-[19px] absolute shadow"
            src="https://via.placeholder.com/20x20"
          /> */}
      </div>
    </footer>
  );
}
