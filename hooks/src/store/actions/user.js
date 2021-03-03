const user = {
    login: function(dispatch, name) {
        dispatch({type: 'login', payload: name})
    }
}

export default user

// export function login(dispatch, name) {
//         dispatch({type: 'login', payload: name})
//     }


