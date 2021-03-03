import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    const gerarNome = () => Math.random() > 0.5 ? 'João' : 'Pedro'
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => cb(gerarNome(), gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}