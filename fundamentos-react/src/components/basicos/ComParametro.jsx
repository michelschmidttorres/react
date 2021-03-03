import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    console.log(props)
    const aluno = props.aluno
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{aluno} </strong>
                tem nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status}</strong>!
            </p>
        </div>
    )
}