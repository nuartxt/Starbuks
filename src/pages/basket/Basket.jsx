function Basket({onClose, onRemove , items = []}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Корзина</h2>
                    <img className="cursor-pointer" src="/icon-x.svg" alt="X" onClick={onClose} />
                </div>
                <div className="mb-6">
                    {items.map((obj) => (
                            <div className="flex items-center border border-gray-200 rounded-lg p-4 mb-4 overflow-hidden">
                                <img width={70} height={70} src={obj.img} alt="Sneakers" className="mr-4" />
                                <div className="flex-1">
                                    <p className="text-base font-medium mb-1">{obj.text}</p>
                                    <b className="text-sm font-semibold">{obj.description}</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className="cursor-pointer" src="/icon-x.svg" alt="X" />
                            </div>
                        ))}


                </div>
                <div className="border-t border-gray-200 pt-4">
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Итого:</span>
                            <b className="text-lg font-semibold">21 498тг</b>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-600">Налог 5%:</span>
                            <b className="text-lg font-semibold">1074тг</b>
                        </li>
                    </ul>
                    <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Basket;
