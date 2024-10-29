import { NavLink } from "react-router-dom";


export default function News() {
    return (
        <>
            <div className="flex gap-10">
                <img className="w-1/2 object-cover" src="/news1.webp" alt="news1" />
                <div className="flex flex-col gap-4 justify-start">
                    <h2 className="font-bold text-xl">Официальное Заявление Starbucks</h2>
                    <p className="text-sm">В Starbucks правда и прозрачность процессов необходимы для выполнения нашей миссии, выполнения наших обещаний и соблюдения наших ценностей. Поэтому, когда дезинформация о нашей компании распространяется с молниеносной скоростью во все более полярном мире, мы считаем крайне важным реагировать фактами и подтверждать нашу позицию по ключевым вопросам.</p>
                    <NavLink to="/official-state">
                        <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 transition ease-in duration-300">Подробнее</button>
                    </NavLink>
                </div>
            </div>
            <div className="flex gap-10">
                <img className="w-1/2 object-cover" src="/barista.webp" alt="news1" />
                <div className="flex flex-col gap-4 justify-start">
                    <h2 className="font-bold text-xl">Официальное Заявление Starbucks</h2>
                    <p className="text-sm">В Starbucks правда и прозрачность процессов необходимы для выполнения нашей миссии, выполнения наших обещаний и соблюдения наших ценностей. Поэтому, когда дезинформация о нашей компании распространяется с молниеносной скоростью во все более полярном мире, мы считаем крайне важным реагировать фактами и подтверждать нашу позицию по ключевым вопросам.</p>
                    <NavLink to="/regions">
                        <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 transition ease-in duration-300">Подробнее</button>
                    </NavLink>
                </div>
            </div>

        </>
    )
}