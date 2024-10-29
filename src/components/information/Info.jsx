import { useState } from "react"


export default function Info() {
    const [cartOpen, setCartOpen] = useState(null);

    return (
        <div className="Information p-5 bg-gray-100 rounded-lg shadow-md">
            <ul className="text-3xl pr-10 space-y-5">
                <li className="flex flex-col justify-between pb-5 cursor-pointer" onClick={() => setCartOpen(cartOpen === 1 ? null : 1)}>
                    <div className="flex items-center">
                        О нас
                        <img
                            width={18}
                            height={18}
                            src="/public/angle-small-down.svg"
                            className={`ml-2 transition-transform ${cartOpen === 1 ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                    <ul className={`${cartOpen === 1 ? "block" : "hidden"} mt-3 p-4 border border-gray-300 rounded-lg bg-white shadow-sm space-y-3`}>
                        <li className="text-lg text-black">О нас</li>
                        <li className="text-lg text-black">Starbucks История и новости</li>
                    </ul>
                </li>
                
                <li className="flex flex-col justify-between pb-5 cursor-pointer" onClick={() => setCartOpen(cartOpen === 2 ? null : 2)}>
                    <div className="flex items-center">
                        Связаться с нами
                        <img
                            width={18}
                            height={18}
                            src="/public/angle-small-down.svg"
                            className={`ml-2 transition-transform ${cartOpen === 2 ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                    <ul className={`${cartOpen === 2 ? "block" : "hidden"} mt-3 p-4 border border-gray-300 rounded-lg bg-white shadow-sm space-y-3`}>
                        <li className="text-lg text-black">Связаться с нами</li>
                    </ul>
                </li>

                <li className="flex flex-col justify-between pb-5 cursor-pointer" onClick={() => setCartOpen(cartOpen === 3 ? null : 3)}>
                    <div className="flex items-center">
                        Социальная ответственность
                        <img
                            width={18}
                            height={18}
                            src="/public/angle-small-down.svg"
                            className={`ml-2 transition-transform ${cartOpen === 3 ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                    <ul className={`${cartOpen === 3 ? "block" : "hidden"} mt-3 p-4 border border-gray-300 rounded-lg bg-white shadow-sm space-y-3`}>
                        <li className="text-lg text-black">Ответственность</li>
                    </ul>
                </li>

                <li className="flex flex-col justify-between pb-5 cursor-pointer" onClick={() => setCartOpen(cartOpen === 4 ? null : 4)}>
                    <div className="flex items-center">
                        Программа лояльности
                        <img
                            width={18}
                            height={18}
                            src="/public/angle-small-down.svg"
                            className={`ml-2 transition-transform ${cartOpen === 4 ? "rotate-180" : "rotate-0"}`}
                        />
                    </div>
                    <ul className={`${cartOpen === 4 ? "block" : "hidden"} mt-3 p-4 border border-gray-300 rounded-lg bg-white shadow-sm space-y-3`}>
                        <li className="text-lg text-black">Программа лояльности</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
