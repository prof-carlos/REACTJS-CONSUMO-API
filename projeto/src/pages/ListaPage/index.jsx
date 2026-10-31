import './style.css'

export default function ListaPage() {
    return (
        <div className="lista-page">
            <section className="lista-panel">
                <div className="panel-header">
                    <div>
                        <p className="eyebrow">Alunos</p>
                        <h2>Lista de alunos</h2>
                    </div>

                    <span className="badge">12 cadastrados</span>
                </div>

                <div className="students-list">
                    <div className="student-row">
                        <span className="student-name">Ana Souza</span>
                        <span className="student-email">ana.souza@email.com</span>
                        <span className="student-phone">(11) 99999-1234</span>
                    </div>

                    <div className="student-row">
                        <span className="student-name">Bruno Costa</span>
                        <span className="student-email">bruno.costa@email.com</span>
                        <span className="student-phone">(21) 98888-4321</span>
                    </div>

                    <div className="student-row">
                        <span className="student-name">Carla Mendes</span>
                        <span className="student-email">carla.mendes@email.com</span>
                        <span className="student-phone">(31) 97777-6543</span>
                    </div>
                </div>
            </section>
        </div>
    )
}