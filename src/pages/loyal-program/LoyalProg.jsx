import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Farebase';

export default function LoyalProg() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();  // Хук для навигации

    function login(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError('');
                setEmail('');
                setPassword('');

                // После успешного входа перенаправляем на главную страницу
                navigate('/');  // Перенаправляем на главную страницу
            })
            .catch((error) => {
                console.log(error);
                setError("Простите, мы не смогли найти ваш аккаунт");
            });
    }

    return (
        <div className="flex justify-center px-5">
            <form className="flex flex-col items-center pl-20 w-5/12 h-screen pt-11">
                <p className="text-4xl mb-7">Вход</p>
                <input
                    className="text-xl border-b-2 border-gray-300 mb-7 w-80 p-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email *"
                />
                <input
                    className="text-xl border-b-2 border-gray-300 mb-7 w-80 p-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder="Пароль *"
                />
                <div className="flex w-80 justify-between">
                    <a href="" className="text-green-600 underline">Забыли пароль?</a>
                    <button
                        onClick={login}
                        className="text-sm font-bold border bg-green-500 border-green-500 rounded-full py-2 px-5 hover:bg-green-200 transition ease-in duration-300"
                    >
                        Войти
                    </button>
                </div>

                {error && <p className="text-red-500 mt-4">{error}</p>}  {/* Отображение ошибки */}

                <NavLink to="/auth">
                    <button className="mt-10 text-sm font-bold border border-black rounded-full py-2 px-5 hover:bg-black-200 transition ease-in duration-300">
                        Регистрация
                    </button>
                </NavLink>
            </form>
            <div className="w-7/12">
                <div className="flex flex-col justify-between bg-green-950 h-2/4 pt-9 pl-20 pb-9">
                    <h1 className="text-4xl text-white">
                        «Мои Награды Старбакс» —
                        <br />совершайте покупки,<br />собирайте звезды <br />и получайте подарки!
                    </h1>
                    <p className="pr-52 text-xl text-white">
                        Для того, чтобы стать участником Программы, необходимо зарегистрироваться в «Мои Награды Старбакс»...
                    </p>
                </div>
                {/* Остальная часть кода */}
            </div>
        </div>
    );
}
