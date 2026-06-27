import { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import LOGO from "../assets/logo.svg";
import CLOSE from "../assets/close.svg";
import MENU from "../assets/menu.svg";
import Champion from "../assets/champion.svg";
import Check from "../assets/check.svg";
import ProfileImageOne from "../assets/ProfileImageOne.png";
import ProfileImageTwo from "../assets/ProfileImageTwo.png";
import ProfileImageThree from "../assets/ProfileImageThree.png";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";
import rectangleOne from "../assets/Rectangle 13.png";
import rectangleTwo from "../assets/Rectangle 14.png";
import ContactForm from "../components/ContactForm";




export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <main>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={LOGO} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>

                            <li>
                                <a href="#solution">Soluções</a>
                            </li>

                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>

                            <li>
                                <a href="#pricing">Preços</a>
                            </li>

                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                        <div className="mobile-menu-content">
                    <div className="container flex">

                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#solution">Soluções</a>
                        </li>

                        <li>
                            <a href="#testimonials">Depoimentos</a>
                        </li>

                        <li>
                            <a href="#pricing">Preços</a>
                        </li>

                        <li>
                            <a href="#contact">Contato</a>
                        </li>

                        <li>
                            <a className="reverse-color" href="#">Login</a>
                        </li>   
                    </ul>

                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                        <img src={CLOSE} alt="ícone fechar menu" width={24} height={24} />
                    </span>

                    </div>
                        </div>
                         :
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                            <img src={MENU} alt="ícone menu" width={24} height={24} />
                        </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={rectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                    <img src={rectangleOne} alt="Retangulo dois tela inicial" />
                
                    <div className="container content">
                
                        <p className="desktop-only">
                            Olá
                        </p>
                        <h1>A combinação ideal de segurança e conforto.</h1>
                            <p>
                            O carro ideal para momentos extraordinários. Luxo e performance à altura do seu estilo.
                            </p>
                            <div className="flex gap-1">
                                <span>
                                    <Button text="Cadastre-se" /></span>
                                <span className="desktop-only">
                                    <Button text="Veja mais" secondary />
                                </span>
                            </div>
                    </div>                
            </section>

            <section className="container" id="solution">{
                <header>
                    <span>
                         <h2>Soluções</h2>
                            <span className="desktop-only">
                        <h2>
                            Sob medida para você
                        </h2>
                            </span>
                        </span>
                        <p>
                            A experiência <strong>Swuiter </strong> fala por si.
                            Os depoimentos dos nossos clientes refletem a excelência, o conforto e a exclusividade de cada trajeto.
                        </p>
                        <p>
                            Descubra por que dirigir conosco é uma experiência inesquecível.
                        </p>
                    </header>
                }
                    <section className="even-columns">
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Exclusividade
                                </h3>
                                        <p>
                                           Experimente o verdadeiro significado de exclusividade sobre rodas. Modelos de luxo selecionados para oferecer conforto, presença e desempenho incomparáveis.
                                        </p>
                                    <hr />
                                </div>
                            </div>
                            <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Motorista Particular
                                </h3>
                                        <p>
                                            Viaje com conforto absoluto enquanto um motorista profissional cuida de cada detalhe do seu trajeto. Pontualidade, discrição e sofisticação em cada serviço.
                                        </p>
                                    <hr />
                                </div>
                            </div>
                            <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Free até 1000 km
                                </h3>
                                        <p>
                                            Mais liberdade para você aproveitar sua experiência sem preocupações. Dirija com tranquilidade e aproveite até 1000 km de combustível incluso.
                                        </p>
                                    <hr />
                                </div>
                            </div>
                    </section>   
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já alugou sabe a diferença de uma verdadeira experiência de luxo.
                        Na Swuiter, transformamos a ideia de aluguel de carros em algo exclusivo, sofisticado e inesquecível.
                        Veja abaixo os depoimentos de quem já viveu essa experiência e aprovou cada detalhe.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content"></div>

                        <TestimonialCard
                            image={ProfileImageOne}
                            testimonial="Experiência impecável do início ao fim. O carro estava em perfeito estado e o atendimento foi extremamente profissional. Sem dúvidas, a melhor escolha para quem busca luxo."
                            name="Ricardo M."
                            role="CEO BING CHILLING"
                             stars={4}
                        />

                        <TestimonialCard
                            image={ProfileImageTwo}
                            testimonial="Superou todas as expectativas. Dirigir um carro de alto padrão com todo suporte da Swuiter foi algo realmente exclusivo. Recomendo sem pensar duas vezes."
                            name="Marcelo L."
                            role="Cliente Premium"
                            stars={5}
                        />

                        <TestimonialCard
                            image={ProfileImageThree}
                            testimonial="Pontualidade, qualidade e sofisticação em cada detalhe. O serviço de motorista particular fez toda diferença na minha experiência."
                            name="Felipe A."
                            role="Cliente Premium"
                            stars={5}
                        />
                </section>
            </section>
            
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                        <h2>Nossos planos</h2>
                 </header>

                <section className="even-columns gap-1.5">

                <div className="pricing-card">
                    <span className="plan">
                         <h3>Básico</h3>
                    <p>Você tem direito a um Test Driver.</p>
                    </span>
	                    <h2>Grátis</h2>
	                <Button text="Pedir agora" secondary key="free" />
	                <span className="hr" /><span className="features">
                                    <img src={Check} alt="ícone check" width={24} height={24} />
                                    <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            
	                            <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Um test Driver que preferir</p>
	                        
                        </ul>
                </div>
                <div className="pricing-card premium">
	                <span className="bonus">
		                <p>1º MÊS COM DESCONTO</p>
	                </span>
	                <span className="plan">
                            <h3>Premium</h3>
                        <p>Carro Classe 1</p>
                    </span>
                    <span className="price">
                            <h2>R$ 4999,90</h2>
                            <p>/mês</p>
                    </span>
                        <Button text="Pedir agora" key="premium" />
                    <span className="hr" />
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>30 Dias</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Direito a 2 tanques cheios de combustível.</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Direito a 2 noite com motorista. </p>
                    </span>
                </div>
                <div className="pricing-card premium">
	                <span className="bonus">
		                <p>1º MÊS COM DESCONTO</p>
	                </span>
	                <span className="plan">
                            <h3>Platinum</h3>
                        <p>Carro Classe 2</p>
                    </span>
                    <span className="price">
                            <h2>R$ 9999,90</h2>
                            <p>/mês</p>
                    </span>
                        <Button text="Pedir agora" key="premium" />
                    <span className="hr" />
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>30 Dias</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Direito a 4 tanques cheios de combustível.</p>
                    </span>
                    <span className="features">
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        <p>Direito a 5 noite com motorista. </p>
                    </span>
                </div>
                </section>         
            </section>
            
            <section id="contact" className="container">
                <header>
                    <span className="subtitle">Fale Conosco</span>
                    <h2>Vamos andar com seu carro dos sonho?</h2>
                    <p>
                        Preencha os dados abaixo e contrate seu veiculo premium.
                    </p>
                </header>
                <ContactForm />
            </section>     

            <footer className="footer">
                        <div className="footer-grid">

                        <div className="footer-brand">
                            <img src={LOGO} alt="Logo DonaFrost" width={220} height={80} />
                            <div className="social">
                                <span>📷</span>
                                <span>📘</span>
                                <span>▶️</span>
                            </div>
                        </div>

                        <div>
                            <h4>Empresa</h4>
                            <ul>
                                <li>Sobre nós</li>
                                <li>Faça parte do time</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                    <div>
                        <h4>Funcionalidades</h4>
                        <ul>
                        <li>Marketing</li>
                        <li>Análise de dados</li>
                        <li>Suporte Premium</li>
                    </ul>
                </div>

                <div>
                    <h4>Recursos</h4>
                    <ul>
                        <li>iOS & Android</li>
                        <li>Test Drive</li>
                        <li>Clientes</li>
                        <li>API</li>
                    </ul>
                </div>

                </div>

                <div className="footer-bottom">
                    Feito com 💙 na Swuiter ©2026 - Todos os direitos reservados.
                </div>
            </footer>
        </main> 
    )
}