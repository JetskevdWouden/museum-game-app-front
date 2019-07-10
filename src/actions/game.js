export const GET_LIFES = 'GET_LIFES'

function getLifes(payload){
    return {
        type: GET_LIFES,
        payload: {
            lifes: payload,
        }
    }
}