import * as request from 'superagent'

export const GET_PAINTINGS = 'GET_PAINTINGS'

function getAllPaintings(payload){
    return {
        type: GET_PAINTINGS,
        payload
    }
}

//fetches an array of all paintings
export function getPaintings() {
    const url = 'https://protected-eyrie-79199.herokuapp.com/paintings'
    return async function(dispatch){
        const response = await request(url)
        const {paintings} = response.body
        dispatch(getAllPaintings(paintings))
    }
    
}