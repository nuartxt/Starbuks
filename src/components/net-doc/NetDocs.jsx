export default function NetDocs() {
    return (
        <div className="NetDocs">
            <div className="flex gap-4 mb-10">
                <a href="https://www.facebook.com/people/Starbucks-Казахстан/100089954462101/">
                    <img width={40} height={40} src="/public/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/starbuckskz?igshid=YmMyMTA2M2Y%3D">
                    <img width={40} height={40} src="/public/instagram.png" alt="instagram" />
                </a>
            </div>
            <ul>
                <li className="mb-8">Положение о конфиденциальности</li>
                <li className="mb-8">Условия использования сайта</li>
                <li className="mb-8">ПОЛИТИКА STARBUCKS В ОТНОШЕНИИ ФАЙЛОВ COOKIE</li>
                <li className="mb-8">Публичная оферта</li>
                <li className="mb-8">Выберите свое местоположение</li>
            </ul>
        </div>
    )
}