import React from 'react'

function renderScores(scores) {
        const userOne = scores[0]
        const userTwo = scores[1]
    if (scores.length === 0 && !userTwo.id) {
        return "Waiting for the next user..."
    } else {
        

        return (
            
        <ul>   
            <li>PLAYER: {userOne.id}</li>
            <li>SCORE: {userOne.score}</li>
            <li>PLAYER: {userTwo.id}</li>
            <li>SCORE: {userTwo.score}</li>
        </ul>
    
        )
    }
}


export default function ScoreList(props) {
    const scores = props.userScores


    //console.log("USER ONE?", scores[0])

    //get players --> user
    //get scores of each player
    //save in variables
    //also recieve matching usernames?

    return (
        <div className="scoreBoard">
            <h3>
                SCORE BOARD
            </h3>
            {
                scores &&
                    renderScores(scores)
            }
            {!scores && "Loading Scores..."}
        </div>
    )
}