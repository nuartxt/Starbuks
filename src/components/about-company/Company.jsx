import { NavLink } from "react-router-dom";


export default function Company() {
    return (
        <div className="flex-col">
            <div className="flex gap-5 mb-8">
                <div className="shadow-lg p-5 rounded-lg">
                    <img width={430} height={250} src="/Starbuks1.webp" />
                    <h3>Starbucks История</h3>
                    <p>Sturbucks Истории и новости</p>
                    <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10"><a href="https://stories.starbucks.com/emea/">Узнать больше</a></button>
                </div>
                <div className="shadow-lg p-5 rounded-lg">
                    <img width={430} height={250} src="/Starbuks2.webp" />
                    <h3>О нас</h3>
                    <p>Узнать больше о нашей компании и наследии</p>
                    <NavLink to="/history">
                        <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">Узнать больше</button>
                    </NavLink>
                </div>
            </div>
            <div className="shadow-lg p-5 rounded-lg  w-[420px] h-[550px]">
                <img width={430} height={250} src="/Starbuks3.webp" />
                <h3>Доставка Starbucks®</h3>
                <p>Доставка Starbucks®</p>
                <NavLink to="/delivery">
                    <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">Узнать больше</button>
                </NavLink>
            </div>
            <p className="my-10">Заказывайте любимые напитки и еду с доставкой прямо к двери</p>
            <div className="flex gap-10">
                <img className="w-1/2 object-cover" src="/public/Starbuks4.webp" alt="" />
                <div className="flex flex-col gap-4 justify-start pr-24">
                    <h2 className="font-bold text-xl">Доставка Starbucks®</h2>
                    <p className="text-sm">Подарить себе новые впечатления от давно знакомого и любимого кофе Starbucks® проще, чем кажется. Насладитесь любимым кофе из своей любимой чашки.</p>
                    <NavLink to="/delivery">
                        <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">Заказать сейчас</button>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}