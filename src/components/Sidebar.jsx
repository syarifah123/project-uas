import { ImQuotesLeft } from "react-icons/im";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { BiErrorAlt } from "react-icons/bi";
import { BiCommentError } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { BiText, BiUser } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

import ListMenu from "./ListMenu.jsx";
export default function Sidebar() {
  return (
<div
  id="sidebar"
  className="flex min-h-screen w-72 flex-col bg-gradient-to-b from-[#1B1B2F] via-[#1c1f4a] to-[#1B1B2F] text-gray-400 p-6 shadow-lg rounded-tr-3xl rounded-br-3xl"
>
        
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] dark:text-white
                -900"
        >
          KulinerKita
        </span>
        <span
          id="logo-subtitle"
          className=" font-barlow font-semibold dark:text-white
                -400"
        >
          {" "}
          Admin Panel Kuliner Kita
        </span>
      </div>

      {/* List menu*/}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <ListMenu
            id="menu-1"
            icon={<AiOutlineHome />}
            label="Dashboard"
            isActive
            to="/"
          />
          <ListMenu
            id="menu-2"
            icon={<BiCartAdd />}
            label="Produk"
            to="produk"
          />
          <ListMenu
            id="menu-3"
            icon={<BiText />}
            label="Artikel"
            to="artikel"
          />
          <ListMenu
            id="menu-4"
            icon={<FaQuestionCircle />}
            label="FAQ"
            to="faq"
          />
          <ListMenu
            id="menu-5"
            icon={<BsPerson />}
            label="Karyawan"
            to="karyawan"
          />
          <ListMenu
            id="menu-6"
            icon={<CgWorkAlt />}
            label="Lowongan Kerja"
            to="lowongan-kerja"
          />
          <ListMenu
            id="menu-7"
            icon={<BsFillChatLeftQuoteFill />}
            label="Testimoni"
            to="testimoni"
          />
          <ListMenu
            id="menu-8"
            icon={<BsFillBookmarksFill />}
            label="Booking"
            to="booking"
          />
          <ListMenu
            id="menu-9"
            to="/UserList"
            icon={<BiUser />}
            label="List User"
          />
          {/* Divider */}
          <hr className="border-t border-gray-300 mx-2" />

          <ListMenu
            id="menu-10"
            to="/ErrorPage400"
            icon={<BiCommentError />}
            label="ErrorPage400"
          />
          <ListMenu
            id="menu-11"
            to="/ErrorPage401"
            icon={<BiErrorAlt />}
            label="ErrorPage401"
          />
          <ListMenu
            id="menu-1"
            to="/ErrorPage403"
            icon={<BiError />}
            label="ErrorPage403"
          />
          {/* Divider */}
          <hr className="border-t border-gray-300 mx-2" />
          <ListMenu
            id="menu-13"
            to="/products"
            icon={<MdFastfood />}
            label="Products"
          />
          <ListMenu
            id="menu-14"
            to="/advice"
            icon={<BsFillChatLeftTextFill />}
            label="Advice"
          />
          <ListMenu
            id="menu-15"
            to="/quotes"
            icon={<ImQuotesLeft />}
            label="Quotes"
          />
          {/* Divider */}
          <hr className="border-t border-gray-300 mx-2" />
          <ListMenu
            id="menu-16"
            to="/produk-be"
            icon={<MdFastfood />}
            label="Produk"
          />
          <ListMenu
            id="menu-17"
            to="/artikel-be"
            icon={<BsFillChatLeftTextFill />}
            label="Artikel"
          />
          <ListMenu
            id="menu-18"
            to="/faq-be"
            icon={<FaQuestionCircle />}
            label="FAQ"
          />
          <ListMenu
            id="menu-19"
            to="/lowongan-be"
            icon={<CgWorkAlt />}
            label="Lowongan Kerja"
          />
          <ListMenu
            id="menu-20"
            to="/testimoni-be"
            icon={<CgWorkAlt />}
            label="Testimoni"
          />
          <ListMenu
            id="menu-21"
            to="/contactus-be"
            icon={<CgWorkAlt />}
            label="Contact Us"
          />
          {/* Divider */}
          <hr className="border-t border-gray-300 mx-2" />

          <ListMenu id="menu-22" to="/Login" icon={<BiLogIn />} label="Login" />
        </ul>
      </div>
      {/* Footer */}
      <div className="mt-auto text-white text-sm pt-10">
        <div className="bg-[#1c1f4a] p-4 rounded-lg">
          <p className="font-bold mb-2">Customer Support</p>
          <p className="text-gray-300 mb-4">
            Ask you query, place requests or important issues. Our support team will contact 24/7 to you.
          </p>
          <button className="flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-2 px-4 rounded-md w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M18.364 5.636a9 9 0 11-12.728 0M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Connect Now
          </button>
        </div>
        <div className="mt-4 text-gray-400">
          <p className="hover:underline cursor-pointer">Terms & Services</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
