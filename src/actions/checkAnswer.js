export const CHECK_ANSWER = 'CHECK_ANSWER'

export function guessedAnswer(payload){
    return {
        type: CHECK_ANSWER,
        payload
    }
}

