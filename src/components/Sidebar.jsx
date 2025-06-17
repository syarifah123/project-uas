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
          <li className="relative group">
            <div className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md hover:bg-[#23235a] transition-colors">
              <BiCartAdd className="text-xl" />
              <span>Json Pages</span>
              <svg
                className="ml-auto w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="absolute left-0 mt-0 w-56 bg-[#23235a] rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-10">
              <li>
                <ListMenu
                  id="menu-2"
                  icon={<BiCartAdd />}
                  label="Produk"
                  to="produk"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-3"
                  icon={<BiText />}
                  label="Artikel"
                  to="artikel"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-4"
                  icon={<FaQuestionCircle />}
                  label="FAQ"
                  to="faq"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-5"
                  icon={<BsPerson />}
                  label="Karyawan"
                  to="karyawan"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-6"
                  icon={<CgWorkAlt />}
                  label="Lowongan Kerja"
                  to="lowongan-kerja"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-7"
                  icon={<BsFillChatLeftQuoteFill />}
                  label="Testimoni"
                  to="testimoni"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-8"
                  icon={<BsFillBookmarksFill />}
                  label="Booking"
                  to="booking"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-9"
                  to="/UserList"
                  icon={<BiUser />}
                  label="List User"
                />
              </li>
            </ul>
          </li>
          <hr className="border-t border-gray-300 mx-2" />
          {/* Dropdown Error Menu */}
          <li className="relative group">
            <div className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md hover:bg-[#23235a] transition-colors">
              <BiError className="text-xl" />
              <span>Error Pages</span>
              <svg
                className="ml-auto w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="absolute left-0 mt-0 w-56 bg-[#23235a] rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-10">
              <li>
                <ListMenu
                  id="menu-10"
                  to="/ErrorPage400"
                  icon={<BiCommentError />}
                  label="ErrorPage400"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-11"
                  to="/ErrorPage401"
                  icon={<BiErrorAlt />}
                  label="ErrorPage401"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-12"
                  to="/ErrorPage403"
                  icon={<BiError />}
                  label="ErrorPage403"
                />
              </li>
            </ul>
          </li>
          <hr className="border-t border-gray-300 mx-2" />
          { /* dummyjson */}
          <li className="relative group">
            <div className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md hover:bg-[#23235a] transition-colors">
              <BsFillChatLeftTextFill className="text-xl" />
              <span>DummyJson Pages</span>
              <svg
                className="ml-auto w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="absolute left-0 mt-0 w-56 bg-[#23235a] rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-10">
              <li>
                <ListMenu
                  id="menu-13"
                  to="/products"
                  icon={<MdFastfood />}
                  label="Products"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-14"
                  to="/advice"
                  icon={<BsFillChatLeftTextFill />}
                  label="Advice"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-15"
                  to="/quotes"
                  icon={<ImQuotesLeft />}
                  label="Quotes"
                />
              </li>
            </ul>
          </li>

          {/* Divider */}
          <hr className="border-t border-gray-300 mx-2" />
          <li className="relative group">
            <div className="flex items-center gap-3 cursor-pointer px-4 py-2 rounded-md hover:bg-[#23235a] transition-colors">
              <MdFastfood className="text-xl" />
              <span>Supabase Pages</span>
              <svg
                className="ml-auto w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="absolute left-0 mt-0 w-56 bg-[#23235a] rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-10">
              <li>
                <ListMenu
                  id="menu-16"
                  to="/produk-be"
                  icon={<MdFastfood />}
                  label="Produk"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-17"
                  to="/artikel-be"
                  icon={<BsFillChatLeftTextFill />}
                  label="Artikel"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-18"
                  to="/faq-be"
                  icon={<FaQuestionCircle />}
                  label="FAQ"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-19"
                  to="/lowongan-be"
                  icon={<CgWorkAlt />}
                  label="Lowongan Kerja"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-20"
                  to="/testimoni-be"
                  icon={<CgWorkAlt />}
                  label="Testimoni"
                />
              </li>
              <li>
                <ListMenu
                  id="menu-21"
                  to="/contactus-be"
                  icon={<CgWorkAlt />}
                  label="Contact Us"
                />
              </li>
            </ul>
          </li>
          {/* Divider */}
          <hr className="border-t border-gray-300 mx-2" />

          <ListMenu id="menu-22" to="/Login" icon={<BiLogIn />} label="Logout" />
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
    </div >
  );
}
