import { useState, useEffect } from 'react';
import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default function LoyalProgram() {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get('https://5fb52220d7726520.mokky.dev/loyal-prog').then((res) => {
            setMenu(res.data)
        })

    }, [])

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


                <div className="w-[150%]">
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


                <div className="right__side p-5 flex flex-col gap-10">
                    <p className='text-2xl font-bold'>
                        Программа лояльности
                        <p className='text-2xl font-bold mt-5'>
                            Добро пожаловать в нашу Программу лояльности! С нами ваши покупки становятся еще выгоднее. Присоединяйтесь и начните зарабатывать бонусы за каждую покупку, открывая для себя эксклюзивные скидки, подарки и специальные предложения. Чем больше вы с нами – тем больше привилегий вас ждет!
                        </p>
                    </p>

                    <div className="flex flex-wrap gap-5 mb-8">
                        <div className='flex flex-wrap gap-3 '>

                            {menu.map((obj) => (
                                <div className="shadow-lg p-5 rounded-lg">
                                    <img width={370} height={250} src={obj.img} />
                                    <h3>
                                        {obj.main_text}
                                    </h3>
                                    <p className='w-64'>
                                        {obj.text}
                                    </p>
                                    <p className='w-64'>
                                        {obj.sectext}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className='delivers'>
                        <img src='/public/delivers.webp' alt='picture' />
                        <p className='text-2xl py-7 mb-4'>Теперь Starbucks можно заказать у партнера ЯндексЕда</p>
                        <NavLink to="/delivery">
                            <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 ">Заказать сейчас</button>
                        </NavLink>
                    </div>

                    <div className='py-7'>
                        <p className='font-bold mb-11 text-sm'>
                            Аллергены
                        </p>
                        <p className='pr-72 mb-14 text-lg text-slate-500'>
                            Мы не можем гарантировать, что наша продукция не содержит конкретного аллергена ввиду использования общего оборудования, посуды и открытой обработки продукции в наших кофейнях.
                        </p>
                    </div>

                    <Info />
                    <hr className='font-bold' />
                    <NetDocs />
                </div>

            </section>
        </>
    )
}