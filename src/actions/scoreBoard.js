export const SET_SCOREBOARD = "SET_SCOREBOARD"

export function onEvent (event) {
    console.log("ARE MY SCORES IN THIS DATA?", event.data)
    const data = event.data
    const userScores = JSON.parse(data)
    console.log("WHAT DOES MY DATA LOOK LIKE NOW?", userScores)

    return {
        type: SET_SCOREBOARD,
        payload: userScores
    }
}

//NOTES
//userScores --> array of score objects (id, score, userId, gameId)