export const GET_LIFES = 'GET_LIFES'

export function getLifes(number){
    const payload=  number -1
    return {
        type: GET_LIFES,
        payload
    }
}

export const GET_POINTS = 'GET_POINTS'

export function getPoints(lifes, points){
    const payload = points + (lifes * points)
    return {
        type: GET_POINTS,
        payload
    }
}