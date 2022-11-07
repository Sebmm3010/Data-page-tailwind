import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='w-full fixed top-0 bg-[#000300] opacity-90 z-50'>
            <nav className="text-white flex justify-between h-24 max-w-[1240px] mx-auto px-4 items-center">
                <h1 className={nav ? 'text-[#000300]' : 'w-full  text-3xl font-bold text-[#00df9a]'}>DATA-ANALISIS.</h1>
                <ul className="hidden md:flex">
                    <li className="p-4"><a href="#">Home</a></li>
                    <li className="p-4"><a href="#">Company</a></li>
                    <li className="p-4"><a href="#">Resources</a></li>
                    <li className="p-4"><a href="#">About</a></li>
                    <li className="p-4"><a href="#">Contact</a></li>
                </ul>
                {/* Movil menu */}
                <div onClick={handleNav}
                    className="block md:hidden"
                >
                    {
                        nav
                            ? <AiOutlineClose size={20} />
                            : <AiOutlineMenu size={20} />
                    }
                </div>

                <div className={nav ? 'fixed md:hidden left-0 top-0 w-[45%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-300' : 'fixed left-[-100%]'}>
                    <h1 className="w-full  text-3xl font-bold text-[#00df9a] m-4">DATA-ANALISIS.</h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-500"><a href="#">Home</a></li>
                        <li className="p-4 border-b border-gray-500"><a href="#">Company</a></li>
                        <li className="p-4 border-b border-gray-500"><a href="#">Resources</a></li>
                        <li className="p-4 border-b border-gray-500"><a href="#">About</a></li>
                        <li className="p-4"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
