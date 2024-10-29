import Info from '../../components/information/Info'
import NetDocs from '../../components/net-doc/NetDocs';
import { NavLink } from "react-router-dom";


const arr = [
    {
        img: '/public/картинка.webp',
        img_2: '/public/картинка 2.webp'
    },
    {
        img: '/public/картинка 3.webp',
        img_2: '/public/картинка 4.webp'
    },
    {
        img: '/public/картинка 5.webp',
        img_2: '/public/картинка 6.webp'
    },
];

export default function Official() {
    return (
        <div className="px-20 text-xl">
            <div className="mb-20">
                <p className="my-5 font-bold">Официальное заявление Starbucks</p>
                <p>
                    Правда – это то, что имеет значение для Starbucks. В ответ на ложную информацию мы делимся фактами о том, во что на самом деле верит и за что выступает Starbucks.

                    В Starbucks правда и прозрачность процессов необходимы для выполнения нашей миссии, выполнения наших обещаний и соблюдения наших ценностей. Поэтому, когда дезинформация о нашей компании распространяется с молниеносной скоростью во все более полярном мире, мы считаем крайне важным реагировать фактами и подтверждать нашу позицию по ключевым вопросам.

                    В связи с продолжающимся распространением ложной и вводящей в заблуждение информации о Starbucks мы обобщаем некоторые из наиболее часто задаваемых вопросов о бренде и отвечаем фактами.
                </p>
                <p className="my-5 font-bold">
                    Starbucks ресми мәлімдемесі
                </p>
                <p>
                    Шындық – Starbucks үшін маңызды нәрсе. Жалған ақпаратқа жауап ретінде біз Starbucks компаниясы іс жүзінде не нәрсеге сенетіні және нені қолдайтыны туралы фактілермен бөлісеміз.

                    Starbucks-тағы шындық пен ашық процестер біздің миссиямызды орындау, уәделерімізді жүзеге асыру және құндылықтарымызды сақтау үшін өте маңызды. Біздің компаниямыз туралы жалған ақпарат барған сайын әртараптанған әлемде найзағай жылдамдығымен таралып жатқандықтан, біз фактілермен жауап беру және негізгі мәселелер бойынша ұстанымдарымызды растау өте маңызды деп санаймыз.

                    Starbucks туралы жалған және жаңылыстыратын ақпараттың үздіксіз таралуына байланысты біз бренд туралы жиі қойылатын сұрақтардың кейбірін жинақтаймыз және фактілермен жауап береміз.
                </p>
            </div>

            {arr.map((obj) => (
                <div className='flex gap-10 justify-center'>
                    <div>
                        <img src={obj.img} alt="" />
                        <NavLink to="/regions">
                            <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">Узнать больше</button>
                        </NavLink>
                    </div>
                    <div>
                        <img src={obj.img} alt="" />
                        <NavLink to="/regions">
                            <button className="text-sm font-bold border border-green-500 rounded-full py-2 px-5 hover:bg-green-200 text-green-800 transition ease-in duration-300 my-10">Узнать больше</button>
                        </NavLink>
                    </div>
                </div>
            ))}


            <div className=''>
                <Info />
                <hr className='font-bold' />
                <NetDocs />
            </div>
        </div>


    )
}