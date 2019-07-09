


export const ADD_USER = 'ADD_USER'

export function addUser(model, data) {
   // const addedUser = data.find(addedUser => addedUser.name === data.name && addedUser.password === data.password)
    return {
        type: ADD_USER,
        payload: {
           // ...addedUser
        }
    }
}