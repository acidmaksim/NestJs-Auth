import React, { useContext } from "react";
import { AuthContext } from "../components/context";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для Логина</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Введите логин' />
                <MyInput type='password' placeholder='Введите пароль' />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login