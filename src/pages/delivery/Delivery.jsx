import { useState, useEffect } from 'react';
import News from '../../components/news/News';
import Company from '../../components/about-company/Company';
import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
export default function Delivery() {

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
                    
                    bg-[url('/girls.webp')]
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
                    <div className='pb-4'>
                        <img src="/Deliv.png.webp" alt="" />
                        <p className='text-3xl my-8'>
                            Starbucks® стал еще ближе
                        </p>
                        <p className='text-sm pr-52 text-slate-700'>
                            Заказывайте любимые кофе с доставкой домой!  Узнайте, есть ли доставка рядом с вами, добавите в заказ любимую продукцию Starbucks®, и мы доставим вам домой вместе партнерами Wolt или ЯндексЕда.
                        </p>
                    </div>
                    <img src="/ice-cream.webp" alt="" />
                    <div className='mt-5'>
                        <p className='font-bold mb-4'>
                            Выбирай свой любимый напиток
                        </p>
                        <p className='text-3xl mb-4'>
                            Эспрессо Шейк с доставкой
                        </p>
                        <p className='pr-40 text-slate-700'>
                            Эспрессо Овсяный Шейк – нежное сочетание охлажденного эспрессо светлой обжарки с сиропом из тростникового сахара с овсяной основой. Бодрящий и питательный напиток!
                            Эспрессо Шейк Пряная Ваниль – ароматный ванильный вкус с мягким эспрессо светлой обжарки на овсяной основе. Вкууусный и освежающий:)<br />
                            Эспрессо Шейк Белая Мокка – идеальное сочетание светлого эспрессо с соусом Белая Мокка и овсяной основы. Насыщенный питательный вкус!
                        </p>
                        <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10"><a href="https://wolt.com/ru/kaz/almaty/restaurant/starbucks-panfilov">Хочу !</a></button>
                    </div>
                    <div>
                        <p className='font-bold pb-2'>НАШИ ПАРТНЕРЫ ПО ДОСТАВКЕ</p>
                        {/* 
                        <div className='flex gap-2'>
                            <div className="shadow-lg p-5 rounded-lg w-[430px] h-[550px]">
                                <img width={420} height={250} src="/wolt.webp" />
                                <h3>Доставка Starbucks® с сервисом Wolt</h3>
                                <p className='w-64'>Wolt доставит ваши любимые напитки и еду прямо к двери</p>
                                <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">
                                    <a href="https://wolt.com/ru/kaz/almaty/restaurant/starbucks-panfilov">Узнать больше</a>
                                </button>
                            </div>
                            <div className="shadow-lg p-5 rounded-lg w-[430px] h-[550px]">
                                <img width={400} height={250} src="/yandex.webp" />
                                <h3>Доставка Starbucks® с сервисом ЯндексЕда</h3>
                                <p className='w-64'>
                                    Удобная доставка любимых напитков от ЯндексЕда. Если вы уже рядом с кофейней- можно оформить самовывоз и наши бариста приготовят напиток к Вашему визиту
                                </p>
                                <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">
                                    <a href="https://eda.yandex.kz/ru-kz/r/starbucks?placeSlug=starbucks_cbrus">Узнать больше</a>
                                </button>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <div className="shadow-lg p-5 rounded-lg w-[430px] h-[550px]">
                                <img width={400} height={250} src="/pickup.webp" />
                                <h3>Самовывоз</h3>
                                <p className='w-64'>
                                    Если вы хотите забрать свой напиток по пути, просто сделайте заказ в ЯндексЕда и мы приготовим напиток к вашему визиту
                                </p>
                            </div>
                        </div> */}


                        <div className='flex gap-2'>
                            <div className="shadow-lg p-5 rounded-lg">
                                <img width={430} height={250} src="/wolt.webp" />
                                <h3>Доставка Starbucks® с сервисом Wolt</h3>
                                <p className='w-64'>Wolt доставит ваши любимые напитки и еду прямо к двери</p>
                                <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10"><a href="https://wolt.com/ru/kaz/almaty/restaurant/starbucks-panfilov">Узнать больше</a></button>
                            </div>
                            <div className="shadow-lg p-5 rounded-lg">
                                <img width={430} height={250} src="/yandex.webp" />
                                <h3>Доставка Starbucks® с сервисом ЯндексЕда</h3>
                                <p className='w-64'>
                                    Удобная доставка любимых напитков от ЯндексЕда. Если вы уже рядом с кофейней- можно оформить самовывоз и наши бариста приготовят напиток к Вашему визиту
                                </p>
                                <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10"><a href="https://eda.yandex.kz/ru-kz/r/starbucks?placeSlug=starbucks_cbrus">Узнать больше</a></button>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <div className="shadow-lg p-5 rounded-lg w-[420px] h-[550px]">
                                <img width={420} height={250} src="/pickup.webp" />
                                <h3>Самовывоз</h3>
                                <p className='w-64'>
                                    Если вы хотите забрать свой напиток по пути, просто сделайте заказ в ЯндексЕда и мы приготовим напиток к вашему визиту
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='py-8'>
                        <p className='mb-5 font-bold'>
                            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                        </p>
                        <p className='text-lg text-slate-500'>
                            Часто задаваемые вопросы о Доставке Starbucks® FAQs.
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