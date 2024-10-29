import { MapPin } from 'lucide-react'
import { NavLink } from "react-router-dom";

export default function Header() {


    return (
        <>
            <header className='px-10 flex justify-between shadow-md h-[15vh]'>
                <nav className='flex items-center gap-5'>
                    <NavLink to="/" > <img src="/starbucks-icon.svg" alt="" /></NavLink>

                    <ul className='flex items-center gap-5 font-bold'>
                        <NavLink to="/menu">
                            <li className='cursor-pointer'><a href=''>МЕНЮ</a></li>
                        </NavLink>

                        <NavLink to="/delivery">
                            <li className='cursor-pointer'><a href=''>ДОСТАВКА</a></li>
                        </NavLink>
                        <NavLink to="/loyal-program">
                            <li className='cursor-pointer'><a href=''>ПРОГРАММА ЛОЯЛЬНОСТИ</a></li>
                        </NavLink>
                        <NavLink to='/regions'>
                            <li className='cursor-pointer'><a href=''>O STARBUCKS В РЕГИОНЕ MIDDLE EAST</a></li>
                        </NavLink>
                        <NavLink to='/official-state'>
                            <li className='official-state'><a href=''>ОФИЦИАЛЬНОЕ ЗАЯВЛЕНИЕ STARBUCKS</a></li>
                        </NavLink>
                    </ul>
                </nav>

                <div className='relative flex items-center gap-5'>
                    <MapPin />
                    <NavLink to="/map">
                        <a className='font-bold' href="#">Кофейни рядом</a>
                    </NavLink>
                </div>
            </header>
        </>
    )
}
