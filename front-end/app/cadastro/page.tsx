"use client"
import Header from '@/components/header'
import React from 'react'

export default function Cadastro() {
    return (
        <div className="body-login-cadastro">
            <Header login unfixed/>
            
                <div className="card-login-cadastro" role="form" aria-labelledby="cadastro-heading">
                    <h2 id="cadastro-heading">Faça seu Cadastro</h2>
                    <form id="cadastroForm">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" placeholder="Seu nome completo" required aria-describedby="nome-error"/>
                                <small id="nome-error" className="error-message"></small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" placeholder="000.000.000-00" required maxLength={14} aria-describedby="cpf-error"/>
                                <small id="cpf-error" className="error-message"></small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cadEmail">E-mail</label>
                            <input type="email" id="cadEmail" placeholder="seu@email.com" required aria-describedby="email-error"/>
                                <small id="email-error" className="error-message"></small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cadSenha">Senha</label>
                            <input type="password" id="cadSenha" placeholder="Crie uma senha" minLength={8} required aria-describedby="senha-tips senha-error"/>
                                <div id="senha-tips">
                                    <small id="length-tip" className="password-tip">A senha deve conter 8 ou mais caracteres</small>
                                    <small id="special-char-tip" className="password-tip">A senha deve conter pelo menos um caractere
                                        especial</small>
                                </div>
                                <small id="senha-error" className="error-message"></small>
                        </div>

                        <button type="submit" className="btn-login">Cadastrar</button>
                    </form>

                    <p className="link-text">Já tem conta? <a href="/login">Entrar</a></p>
                </div>
        </div>
    )
}
