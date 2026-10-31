import './style.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>
                    &copy; {new Date().getFullYear()} -
                    Todos os direitos reservados.
                    <br />
                    SENAI - BA
                </p>
            </div>
        </footer>
    )
}