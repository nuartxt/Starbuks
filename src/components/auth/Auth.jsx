import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../Farebase';


export default function Auth() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [copyPassword, setCopyPassword] = useState("")
    const [error, setError] = useState("")
    function register(e) {
        e.preventDefault()
        if (copyPassword !== password) {
            setError("Пароль неверный")
            return;
        }

        console.log('Email:', email); // Логин
        console.log('Password:', password); // Пароль

        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user)
            setError('')
            setEmail('')
            setPassword('')
            setCopyPassword('')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="flex justify-center h-screen py-14">
            <form onSubmit={register} className="flex flex-col items-center text-center">
                <h1 className="mb-7 text-4xl">Регистрация</h1>
                <input className="text-xl border-b-2 border-gray-300 mb-7 w-80 p-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Email *" />
                <input className="text-xl border-b-2 border-gray-300 mb-7 w-80 p-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' placeholder="Пароль *" />
                <input className="text-xl border-b-2 border-gray-300 mb-7 w-80 p-1"
                    value={copyPassword}
                    onChange={(e) => setCopyPassword(e.target.value)}
                    type='password' placeholder="Повторите пароль *" />
                <button
                    className="text-sm font-bold border bg-green-500 border-green-500 rounded-full py-2 px-5 hover:bg-green-200 transition ease-in duration-300 w-80"
                >
                    Зарегмстрироваться
                </button>
                <div className="w-full mt-8">
                    <p className=" h-14 flex items-center text-2xl">
                        У вас уже есть аккаунт в “мои награды старбакс”
                    </p>
                    <button className="mt-5 text-sm font-bold border  border-black rounded-full py-2 px-5 hover:bg-black-200 transition ease-in duration-300">Войти</button>
                </div>
                {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            </form>
        </div>
    )
}


