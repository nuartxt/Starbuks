import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MenuSections() {
    const [coffee, setCoffee] = useState([])
    
    useEffect(() => {
        axios.get('https://5fb52220d7726520.mokky.dev/coffee').then((res) => {
            setCoffee(res.data)
        })
    }, [])

    return (
        <div>
            <div className="flex gap-3 flex-wrap">
                {coffee.map((obj) => (
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
        </div>
    )
}