import './style.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function CadastroPage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    async function cadastrar(evento) {
        evento.preventDefault()

        try {
            await api.post('/alunos', { nome, email, telefone })

            toast.success('Aluno cadastrado com sucesso!')

            setNome('')
            setEmail('')
            setTelefone('')
        } catch (erro) {
            toast.error('Erro ao cadastrar aluno. Tente novamente.')
        }
    }

    return (
        <div className="cadastro-page">
            <form onSubmit={cadastrar} className="cadastro-form">
                <div className="form-heading">
                    <p className="eyebrow">Cadastro</p>
                    <h2>Adicionar aluno</h2>
                </div>

                <div className="input-group">
                    <label htmlFor='campo-nome'>Nome</label>
                    <input
                        id='campo-nome'
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome completo"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor='campo-email'>Email</label>
                    <input
                        id='campo-email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="exemplo@email.com"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor='campo-telefone'>Telefone</label>
                    <input
                        id='campo-telefone'
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="(11) 99999-9999"
                        required
                    />
                </div>

                <button type="submit">Cadastrar aluno</button>
            </form>
        </div>
    )
}