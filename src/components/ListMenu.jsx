import { NavLink } from "react-router-dom";
export default function ListMenu({ id, label, icon, to }) {
  const menuClass = ({ isActive }) =>
    `flex  cursor-pointer items-center rounded-xl p-4 font-medium text-white hover:bg-yellow-200 hover:font-extrabold
        ${isActive
      ? "bg-yellow-400 text-black hover:text-black font-extrabold"
      : "text-gray-600 hover:text-black hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <NavLink id={id} to={to} className={menuClass}>
      <span className="mr-4 text-xl"> {icon} </span>
      {label}
    </NavLink>
  );
}
