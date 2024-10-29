import { useState, useEffect } from 'react';
import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default function Map() {

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
            <section className="main flex justify-between gap-10">
                <div className="w-[38%]">
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
                    <div className="flex gap-5 fixed text-white bottom-10 left-[9rem] text-sm font-bold">
                        <button className="px-4 py-1 border rounded-full"><a href="https://wolt.com/ru/kaz/almaty/restaurant/starbucks-panfilov">Заказать сейчас</a></button>
                        <button className="px-4 py-1 border rounded-full"><a href="https://www.google.ru/maps/search/starbucks+алматы/@43.2741323,76.8133691,11z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">Кофейни рядом</a></button>
                    </div>
                </div>
                <div className="right__side  w-[60%] p-6  flex flex-col gap-8 items-center">
                    <div class="">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372173.08733465103!2d76.62286888733075!3d43.21783136500505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2z0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1730125913360!5m2!1sru!2skz"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy">
                        </iframe>
                    </div>

                    <Info />
                    <hr className='font-bold' />
                    <NetDocs />
                </div>


            </section>
        </>
    )
}