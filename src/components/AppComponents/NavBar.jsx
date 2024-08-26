import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import Logo from "/icons/dekksColored.svg";
import { UpdateState } from "../../utilites/UpdateState.jsx";
const NavBar = () => {
    const { subscribeBox, toggleSubscribeBoxState } = useContext(UpdateState);
    const location = useLocation();
    useEffect(() => {
        const toggleState = () => {
            toggleSubscribeBoxState()
        };

        if (subscribeBox) {
            document.body.style.overflow = "hidden";
            window.addEventListener("click", toggleState);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("click", toggleState);
        };
    }, [subscribeBox, toggleSubscribeBoxState]);
    return (
        <>
            <header className="px-[15%] py-4 tab:px-3">
                <nav className="flex justify-between items-center">
                    <NavLink className="inline-flex gap-1" to={"/"} title="Dekks">
                        <div>
                            <img src={Logo} alt="Dekks" title="Dekks" />
                        </div>
                    </NavLink>
                    <div>
                        <ul className="flex items-center gap-4">
                            <li>
                                <NavLink to={"/"} className={`${location.pathname === '/' ? 'opacity-100' : 'opacity-50'}`}>
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/plans"} className="opacity-50">
                                    Plans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/blog"} className="opacity-50">
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    className="bg-[#8e8e98] touchBtn text-black p-1 rounded-lg hover:bg-[#9f9fa4]"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSubscribeBoxState();
                                    }}
                                >
                                    Get Updates
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {subscribeBox && (
                <div
                    className={`subscribeMsg transform -translate-x-1/2 -translate-y-1/2`}
                >
                    <h1 className="text-lg">Get news and updates</h1>
                    <form action="#" className="flex my-4">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-[#8e8e9833] w-72 p-3 text-white outline-none rounded-l-lg mob:w-auto"
                            required
                        />
                        <button className="bg-[#47474c] px-3 rounded-r-lg hover:bg-[#515155]">
                            Subscribe
                        </button>
                    </form>
                    <span className="text-xs text-[#8e8e98]">
                        We don&apos;spam.
                        <span className="text-white cursor-pointer">GDBR</span> ready
                    </span>
                </div>
            )}
        </>
    )
}
export default NavBar