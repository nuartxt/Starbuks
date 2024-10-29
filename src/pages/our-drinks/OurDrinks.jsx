import { useState, useEffect } from 'react';
import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
import MenuSections from '../../components/menu-sections/MenuSections';



export default function OurDrinks() {

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


                <div className="w-[350%]">
                    <div className="
                    h-screen
                    sticky
                    top-0
                    
                    bg-[url('/Cofee_mashine.webp')]
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
                    <div>
                        <p className='text-4xl py-8'>
                            Весенние новинки уже в кофейнях!
                        </p>
                        <p className='font-bold text-xl mb-6'>
                            Наслаждайтесь напитками Starbucks
                        </p>
                        <p className='text-lg pr-72 text-slate-700'>
                            При таком богатстве выбора самый лучший способ найти свой любимый кофе – это попробовать каждый
                        </p>
                    </div>
                    <MenuSections />
                    <div className='py-7'>
                        <p className='font-bold mb-11 text-sm'>
                            Аллергены
                        </p>
                        <p className='pr-72 mb-14 text-lg text-slate-500'>
                            Мы не можем гарантировать, что наша продукция не содержит конкретного аллергена ввиду использования общего оборудования, посуды и открытой обработки продукции в наших кофейнях.
                        </p>
                        <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 ">Узнать больше</button>
                    </div>
                    <Info />
                    <hr className='font-bold' />
                    <NetDocs />
                </div>

            </section>
        </>
    )
}