export function numberReducer(state, action) {
    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }
        case 'number_times7':
            return {...state, number: state.number * 7}
        case 'number_dividedBy25':
            return {...state, number: state.number / 25}
        case 'number_toInt':
            return {...state, number: parseInt(state.number) }
        case 'number_addN':
            return {...state, number:  state.number + action.payload }
        default:
            return state
    }
}