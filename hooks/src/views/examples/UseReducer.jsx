import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from '../../store'
import { number, user  } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <div className="center">
                { state.user ? 
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span> 
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => user.login(dispatch, 'Torres')}>Login</button>
                    <button className="btn" onClick={() => number.number_add2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => number.number_times7(dispatch)}>x7</button>
                    <button className="btn" onClick={() => number.number_dividedBy25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => number.number_toInt(dispatch)}>Inteiro</button>
                    <button className="btn" onClick={() => number.number_addN(dispatch, 5)}>+N</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
