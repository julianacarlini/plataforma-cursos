import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Courses from '@/components/courses'
import Slider from '@/components/slider'

export default function Home() {
    return (
        <div className='background'>
            <Header />
            <div className='main'>
                <section className="container" aria-label="Introdução aos cursos">

                    <div className='carousel-container'>
                        <Slider arrowPosition={'in'} loop center>
                            <img className='carousel-image' src="/assets/images/domine-novos-horizontes.webp" alt="Imagem de destaque: 'Domine Novos Horizontes" />
                            <img className='carousel-image' src="/assets/images/impulsione-sua-carreira.webp" alt="Imagem de destaque: 'Impulsione sua carreira" />
                            <img className='carousel-image' src="/assets/images/crie-seu-futuro.webp" alt="Imagem de destaque: Crie o futuro com código" />
                        </Slider>
                    </div>

                    <div className="text-content-wrapper">
                        <div className="text-content">
                            <h2>Conheça os nossos cursos</h2>
                            <p>Explore a variedade de cursos disponíveis e encontre o caminho ideal para
                                sua carreira. Nossas formações foram cuidadosamente elaboradas para atender às demandas do
                                mercado atual, oferecendo conhecimento aprofundado e habilidades práticas que farão a diferença
                                em sua jornada profissional.</p>
                        </div>
                        <div className="text-content">
                            <h2>Explore uma variedade de cursos</h2>
                            <p>Nós oferecemos diversos cursos para impulsionar sua carreira. Seja para aprimorar suas
                                habilidades de comunicação, mergulhar no mundo digital com programação, alavancar sua carreira
                                com formações em vendas e liderança, ou muito mais, temos o curso certo para você. </p>
                        </div>
                    </div>
                </section>

                <section className="about-us" id="sobre" aria-labelledby="sobre-titulo">
                    <div className="container">
                        <div className="text-content-wrapper">
                            <div className="text-content">
                                <h1 id="sobre-titulo">Bem-vindo(a) à Nexus: Plataforma de cusros online</h1>
                                <p>Na Nexus, acreditamos que o conhecimento é a chave para o futuro. Nascemos da paixão por
                                    educação
                                    e do desejo de democratizar o acesso a um aprendizado de alta qualidade, flexível e
                                    acessível
                                    para todos. </p>
                                <p>A Nexus funciona como um ecossistema de aprendizado dinâmico, onde conectamos alunos e
                                    instrutores especializados em diversas áreas. Nossa plataforma permite que você personalize
                                    seu
                                    percurso educacional e acesse materiais de estudo interativos, videoaulas e exercícios
                                    práticos. Cada curso é projetado para oferecer habilidades aplicáveis, garantindo
                                    que
                                    você não apenas adquira conhecimento, mas também saiba como usá-lo para impulsionar sua
                                    carreira.</p>
                            </div>
                        </div>
                        <div className="image-container">
                            <img src="/assets/images/imagemSobreNos.webp" alt="Imagem ilustrativa: Estudante no computador, simbolizando o aprendizado online." />
                        </div>
                    </div>
                </section>

                <Courses />

                <section className="how-to" id="como-se-inscrever" aria-labelledby="instrucoes-inscrever">
                    <h1 id="instrucoes-inscrever">Como me inscrever?</h1>
                    <div className="container">
                        <div className="text-content-wrapper">
                            <div className="text-content aluno">
                                <h1>Aluno</h1>
                                <ol>
                                    <li>Faça login ou crie sua conta e escolha o curso que deseja</li>
                                    <li>Ao selecionar o curso clique em "Inscreva-se"</li>
                                    <li>Preencha a ficha de inscrição com seus dados e documentos necessários (específico de
                                        cada curso)</li>
                                    <li>Um e-mail será enviado com o resultado da inscrição em até 5 dias</li>
                                    <li>Parabéns! Agora você é um aluno da plataforma, só esperar o início das aulas</li>
                                </ol>
                            </div>
                            <div className="text-content instrutor">
                                <h1>Instrutor</h1>
                                <ol>
                                    <li>Faça login ou crie sua conta e acesse o painel de instrutor</li>
                                    <li>Selecione a opção "Adicionar novo curso"</li>
                                    <li>Insira as informações necessárias na ficha de inclusão de curso e envie o curso para
                                        revisão</li>
                                    <li>Um e-mail será enviado com a aprovação ou não do curso em até 15 dias</li>
                                    <li>Parabéns! Agora você é um instrutor da plataforma.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
