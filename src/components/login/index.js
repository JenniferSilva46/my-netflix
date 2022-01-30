import React from 'react';
import "./style.css";
// import { Container } from './styles';

export default function Login() {
    return (
        <div className="loginBox">
            <div className="loginForm">
                <div className="box">
                    <h2>Entrar</h2>
                    <form action="" method="get">
                        <input type="email" name="email" id="email" placeholder="Email ou número de telefone" />
                        <input type="password" placeholder="Senha" />

                        <button type="submit">Entrar</button>
                    </form>
                    <div className="loginInfo">
                        <label htmlFor="">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                    Lembre-se de mim
                </label>
                        <label>Precisa de ajuda?</label>
                    </div>
                </div>

            </div>

        </div>

    )
}

