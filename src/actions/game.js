export const GET_LIFES = 'GET_LIFES'

export function getLifes(number){
    const payload=  number -1
    return {
        type: GET_LIFES,
        payload
    }
}

export const GET_POINTS = 'GET_POINTS'

export function getPoints(state,lifes, points){

    const payload = state + points + (lifes * points)
        
    return {
        type: GET_POINTS,
        payload
    }
}