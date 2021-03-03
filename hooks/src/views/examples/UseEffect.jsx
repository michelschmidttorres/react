import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    let n = parseInt(num)
    if(!n) n = 0
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n -1) * n
}

function calcParOuImpar (num) {
    let n = parseInt(num)
    if(!n) n = 0
    return num % 2 === 0 ? 'Par' : 'Impar'
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parOuImpar, setParOuImpar] = useState()

    useEffect(function() {
        setFatorial(calcFatorial(number))
        setParOuImpar(calcParOuImpar(number))
    }, [number])
 
    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = "Eita"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div><span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                </div>

                <input type="number" className="input"
                    value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div><span className="text">Status: </span>
                    <span className="text red">{parOuImpar}</span>
                </div>
        </div>
    )
}

export default UseEffect
