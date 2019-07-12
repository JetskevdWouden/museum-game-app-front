import React from 'react'

function renderScores(scores) {
        const userOne = scores[0]
        const userTwo = scores[1]
        console.log("USERONE",userOne)
    if (scores.length === 0 || !userTwo) {
        return "Waiting for the next user..."
    } else {
        

        return (
           
        <ul>   
            <li>PLAYER: {userOne.userId}</li>
            <li>SCORE: {userOne.score}</li>
            <li>PLAYER: {userTwo.userId}</li>
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
            <p>Your user id is: {props.user}</p>
            {
                scores &&
                    renderScores(scores)
            }
            {!scores && "Loading Scores..."}
        </div>
    )
}