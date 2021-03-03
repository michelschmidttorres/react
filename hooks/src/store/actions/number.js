const number = {
    number_add2: function(dispatch) {
        dispatch({ type: 'number_add2' })
    },
    number_times7: function(dispatch) {
        dispatch({ type: 'number_times7' })
    },
    number_dividedBy25: function(dispatch) {
        dispatch({ type: 'number_dividedBy25' })
    }, 
    number_toInt: function(dispatch) {
        dispatch({ type: 'number_toInt' })
    }, 
    number_addN: function(dispatch, n) {
        dispatch({ type: 'number_addN', payload: n })
    }
}

export default number

// export function number_add2(dispatch) {
//     dispatch({ type: 'number_add2' })
// }

// export function number_times7(dispatch) {
//     dispatch({ type: 'number_times7' })
// }

// export function number_dividedBy25(dispatch) {
//     dispatch({ type: 'number_dividedBy25' })
// }

// export function number_toInt(dispatch) {
//     dispatch({ type: 'number_toInt' })
// }

// export function number_addN(dispatch, n) {
//     dispatch({ type: 'number_addN', payload: n })
// }


