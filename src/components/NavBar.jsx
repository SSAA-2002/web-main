import React from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar bg-[#E3F6FF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <FontAwesomeIcon
                                icon={faBarsStaggered}
                                size="2x"
                                className="text-[#3085C3]"
                            />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-lg dropdown-content mt-3 z-[100] p-2 shadow bg-white rounded-box w-52"
                        >
                            <li>
                                <p
                                    onClick={() => navigate("/visa")}
                                    className="text-[#3085C3] hover:text-[#3085C3]"
                                >
                                    VISA
                                </p>
                            </li>
                            <li className="dropdown dropdown-right">

                                <div tabIndex={0} role="button" className="bg-none text-[#3085C3] hover:text-[#3085C3] " >Packages</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-64 p-2 shadow">
                                    <li><a className="text-[#3085C3] hover:text-[#3085C3]" onClick={() => navigate("/domestic")}>Domestic Packages</a></li>
                                    <li><a className="text-[#3085C3] hover:text-[#3085C3]" onClick={() => navigate("/international")}>International Packages</a></li>
                                </ul>
                            </li>
                            <li>
                                <p
                                    onClick={() => navigate("/about")}
                                    className="text-[#3085C3] hover:text-[#3085C3]"
                                >
                                    About Us
                                </p>

                            </li>
                            <li>
                                <p
                                    onClick={() => navigate("/others")}
                                    className="text-[#3085C3] hover:text-[#3085C3]"
                                >
                                    Other Services
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* anchor tag */}
                    <a className="hidden md:block hover:cursor-pointer">
                        <img src={logo} alt="" className="p-1 h-[100px] w-[120px]" />
                    </a>
                </div>
                <div className="navbar-center">
                    <a className="block md:hidden">
                        <img src={logo} alt="" className="p-1 h-[100px] w-[110px]" />
                    </a>
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {/* <li>
              <a className="text-black hover:text-black">Home</a>
            </li> */}
                        <li>
                            <p
                                onClick={() => navigate("/visa")}
                                className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono"
                            >
                                VISA
                            </p>
                        </li>
                        <li className="dropdown dropdown-hover">

                            <div tabIndex={0} role="button" className="bg-none text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono " onClick={() => handleScrollTo("services")}>Packages</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[100] w-64 p-2 shadow">
                                <li><a className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono" onClick={() => navigate("/domestic")}>Domestic Packages</a></li>
                                <li><a className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono" onClick={() => navigate("/international")}>International Packages</a></li>
                            </ul>
                        </li>
                        <li>
                            <p
                                onClick={() => navigate("/about")}
                                className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono"
                            >
                                About Us
                            </p>
                        </li>
                        <li className="dropdown dropdown-hover">

                            <div tabIndex={0} role="button" className="bg-none text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono " onClick={() => navigate("/others")}>Other Services</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[100] w-64 p-2 shadow">
                                <li><a className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono">Attestation</a></li>
                                <li><a className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono">Passport Services</a></li>
                                <li><a className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold font-mono">Insurance</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <p
                        onClick={() => navigate("/contact")}
                        className="text-[#3085C3] hover:text-[#3085C3] text-md lg:text-lg font-bold hover:cursor-pointer font-mono"
                    >
                        Contact Us
                    </p>
                </div>
            </div>
        </>
    );
}

export default Navbar;
