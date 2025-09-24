import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavData } from '../data/data';
import ToggleTheme from "./ui/toggle.theme";

const Desktop = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <nav className="flex flex-row items-center justify-between border-none w-full px-5 py-2 bg-white dark:bg-black ">
            <div className="flex flex-row">
                <button onClick={()=> navigate("/")}>
                    <img src="/pdlogo1.png" loading="lazy" alt="NavLogo" className="h-13 w-14 cursor-pointer" />
                </button>
            </div>
            <ul className="flex justify-center items-center list-none gap-8 uppercase mt-1 text-[17.5px]">
                {NavData.map(({id, name, path}) => (
                    <li key={id}
                        className={`transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer font-semibold ${
                            location.pathname === path ? "border-green-900 font-bolder border-1 rounded-[8px] py-1" +
                                " px-3"
                                : ""
                        }`}>
                        <Link to={path}
                              className="text-inherit tracking-[1px]">
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ToggleTheme />
        </nav>
    )
}
export default Desktop


