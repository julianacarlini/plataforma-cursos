"use client"

import Header from '@/components/header'
import React from 'react'

export default function Login() {



    return (
        <div className='body-login-cadastro'>
            <Header login unfixed/>

            <div className="card-login-cadastro" role="form" aria-labelledby="login-heading">
            <h2 id="login-heading">Faça seu Login</h2>
            <form id="loginForm">
                <div className="form-group">
                    <label htmlFor="loginEmail">E-mail</label>
                    <input type="email" id="loginEmail" placeholder="Insira seu e-mail" required aria-describedby="email-error" />
                    <small id="email-error" className="error-message"></small>
                </div>

                <div className="form-group">
                    <label htmlFor="loginSenha">Senha</label>
                    <input type="password" id="loginSenha" placeholder="Insira sua senha" required minLength={8} aria-describedby="senha-error" />
                    <small id="senha-error" className="error-message"></small>
                </div>

                <button type="submit" className="btn-login">Entrar</button>
            </form>

            <p className="link-text">Ainda não tem conta? <a href="/cadastro">Cadastre-se</a></p>
        </div>
        </div>
    )
}
