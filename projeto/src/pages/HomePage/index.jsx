import { Link } from 'react-router-dom'
import './style.css'

export default function HomePage() {
    return (
        <div className="home-page">
            <section className="hero-panel">
                <p className="eyebrow">Sistema escolar</p>
                <h2>Gestão inteligente para cada aluno.</h2>
                <p>
                    Organize matrículas, cadastros e informações com uma experiência moderna,
                    rápida e clara.
                </p>

                <div className="hero-actions">
                    <Link to="/cadastro" className="primary-link">Cadastrar aluno</Link>
                    <Link to="/lista" className="secondary-link">Ver lista</Link>
                </div>
            </section>

            <div className="home-grid">
                <article className="home-card">
                    <span className="card-icon">01</span>
                    <h3>Cadastro rápido</h3>
                    <p>Registre dados do aluno em poucos passos.</p>
                </article>

                <article className="home-card">
                    <span className="card-icon">02</span>
                    <h3>Controle central</h3>
                    <p>Visualize informações importantes em um único lugar.</p>
                </article>

                <article className="home-card">
                    <span className="card-icon">03</span>
                    <h3>Experiência elegante</h3>
                    <p>Uma interface minimalista inspirada no design premium da Apple.</p>
                </article>
            </div>
        </div>
    )
}