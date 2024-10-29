import { useState, useEffect } from 'react';
import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
import axios from 'axios';



export default function OurFoods() {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        axios.get('https://5fb52220d7726520.mokky.dev/foods').then((res) => {
            setFoods(res.data)
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


                <div className="w-[110%]">
                    <div className="
                    h-screen
                    sticky
                    top-0
                    
                    bg-[url('/food.webp')]
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
                        <p className='font-bold text-xl mb-6'>
                            Еда
                        </p>
                        <p className='text-lg pr-72 text-slate-600'>
                            Наша выпечка и сэндвичи готовятся из высококачественных и простых ингредиентов. Поэтому все, что вы пробуете, - настоящая и действительно вкусная еда
                        </p>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        {foods.map((obj) => (
                            <div className="shadow-lg p-5 rounded-lg ">
                                <img width={370} height={250} src={obj.img} />
                                <h3 className="text-xl max-w-[370px] truncate font-bold">
                                    {obj.text}
                                </h3>
                                <p className="mt-4 max-w-[370px] overflow-hidden text-ellipsis text-slate-700">
                                    {obj.description}
                                </p>
                            </div>
                        ))}
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