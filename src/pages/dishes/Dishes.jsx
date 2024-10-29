import { useState, useEffect } from 'react';
import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
import Basket from '../../pages/basket/Basket';
import axios from 'axios'

export default function Dishes() {

    const [dishes, setDishes] = useState([]); // добавил данные в апи


    useEffect(() => {
        axios.get('https://5fb52220d7726520.mokky.dev/dishes').then((res) => {
            setDishes(res.data)
        })
        axios.get('https://5fb52220d7726520.mokky.dev/cart').then((res) => {
            setCartItems(res.data)
        })
    }, [])


    const [boxOpened, setBoxOpened] = useState(false) //открытие корзины
    const [cartItems, setCartItems] = useState([]) // добавление товаров в корзину


    const onAddToCart = (obj) => {
        axios.post('https://5fb52220d7726520.mokky.dev/cart', obj)
        setCartItems((prev) => [...prev, obj]);

    };

    const onRemoveItem = (id) => {
        axios.delete(`https://5fb52220d7726520.mokky.dev/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    // const onRemoveItem = async (id) => {
    //     try {
    //         await axios.delete(`https://5fb52220d7726520.mokky.dev/cart/${id}`);
    //         setCartItems((prev) => prev.filter(item => item.id !== id));
    //     } catch (error) {
    //         console.error("Ошибка при удалении товара из корзины:", error);
    //     }
    // };



    const [stick, setStick] = useState(false);//скрол страницы

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


                <div className="w-[140%]">
                    <div className="
                    h-screen
                    sticky
                    top-0
                    
                    bg-[url('/cup.webp')]
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

                    <img src="/darck-coffe.webp" alt="" />
                    <div>
                        <p className='font-bold text-xl mb-6'>
                            Наши стаканы и тамблеры
                        </p>
                        <p className='text-lg pr-72 text-slate-600'>
                            Удобные и яркие кружки, тамблеры, бутылки для воды и другое.
                        </p>
                        {boxOpened ? <Basket items={cartItems} onClose={() => setBoxOpened(false)} onRemove={onRemoveItem} /> : null}
                        <button onClick={() => setBoxOpened(true)} className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">
                            Корзина
                        </button>

                    </div>
                    <div className="flex gap-3 flex-wrap">
                        {dishes.map((obj) => (
                            <div className="shadow-lg p-5 rounded-lg ">
                                <img width={370} height={250} src={obj.img} />
                                <h3 className="text-xl max-w-[370px] truncate font-bold">
                                    {obj.text}
                                </h3>
                                <p className="mt-4 max-w-[370px] overflow-hidden text-ellipsis text-slate-700">
                                    {obj.description}
                                </p>
                                <button onClick={() => onAddToCart(obj)} className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">
                                    Добавить в корзину
                                </button>
                            </div>
                        ))}
                    </div>
                    <Info />
                    <hr className='font-bold' />
                    <NetDocs />
                </div>

            </section>
        </>
    )
}
