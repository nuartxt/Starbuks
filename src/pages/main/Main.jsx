import { useState, useEffect } from 'react';
import News from '../../components/news/News';
import Company from '../../components/about-company/Company';
import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
import { NavLink } from "react-router-dom";



export default function Main() {

    const [stick, setStick] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            // Если прокрутка более 100px, фиксируем изображение
            if (scrollY >= 110) {
                setStick(true);

            } else {
                setStick(false);
            }
        };

        // Добавляем обработчик события прокрутки
        window.addEventListener('scroll', handleScroll);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            {/* <Header /> */}
            <section className="main flex justify-between gap-10">

                {/* левая часть */}

                <div className="w-[130%]">
                    <div className="
                    h-screen
                    sticky
                    top-0
                    
                    bg-[url('/stur_banner.webp')]
                    bg-cover
                    bg-no-repeat
                    bg-center

                    before:absolute
                    before:inset-0
                    before:bg-gradient-to-b
                    before:from-transparent
                    before:from-30%
                    before:via-[#00000097]
                    before:via-95%
                    before:to-[#000000a9]
                    before:opacity-75">
                    </div>
                    <div className="flex gap-5 fixed text-white bottom-10 left-[7rem] text-sm font-bold">
                        <button className="px-4 py-1 border rounded-full"><a href="https://wolt.com/ru/kaz/almaty/restaurant/starbucks-panfilov">Заказать сейчас</a></button>
                        <button className="px-4 py-1 border rounded-full"><a href="https://www.google.ru/maps/search/starbucks+алматы/@43.2741323,76.8133691,11z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">Кофейни рядом</a></button>
                    </div>
                </div>


                {/* правая часть */}
                <div className="right__side p-5 flex flex-col gap-10">
                    <News />
                    <div className='ice-cream'>
                        <img src='/ice-cream.webp' alt='picture' />
                        <NavLink to="/delivery">
                            <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">Заказать сейчас</button>
                        </NavLink>
                    </div>
                    <Company />
                    <Info />
                    <hr className='font-bold' />
                    <NetDocs />
                </div>

            </section>
        </>
    );
}