import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent';

import Game from './Game'
import Lifes from './Lifes';
import GameImage from './GameImage';
import ScoreBoardList from './ScoreBoardList';

import './Game.css'
import './Button.css'

import { getAnswers } from '../actions/getPaintings'
import { guessedAnswer } from '../actions/checkAnswer'
import { getLifes, getPoints } from '../actions/game'
import { onEvent, onNext } from '../actions/scoreBoard'


class GameContainer extends Component {
    basUrl = 'https://protected-eyrie-79199.app.com'
    //basUrl = "http://localhost:5000"

    gameId = this.props.match.params.id

    streamUrl = `${this.basUrl}/stream/${this.gameId}`
    //streamUrl = `${this.basUrl}/stream/4`
    source = new EventSource(this.streamUrl)

    componentDidMount() {
        // property of event source and get an event everytime something changes
        this.source.onmessage = this.props.onEvent
        this.props.getAnswers()
        this.props.getLifes(7)
    }

    checkAnswer = (event) => {
        const titleName = event.target.innerHTML
        return this.props.guessedAnswer(titleName)
    }

    onSubmit = () => {
        let currentPoints = this.props.points || 0
        if (this.props.userAnswer === this.props.answer.title) {
            this.props.getPoints(currentPoints, this.props.lifes, 10)
        }
        else {
            this.props.getPoints(currentPoints, this.props.lifes, 1)
        }
       
    }

    revealImage =(event) => {
        if (this.props.lifes > 0){
            event.target.style.visibility = 'hidden'
            this.props.getLifes(this.props.lifes)
        }
    }

    onNext = (event) => {
        const userId = this.props.currentUser.userId
        this.props.onNext(userId, this.props.points)

        request
            //.put(`${this.basUrl}/score/4`)
            .put(`${this.basUrl}/score/${this.gameId}`)
            .send({ score: this.props.points, userId })
            .then(response => { console.log(response, 'response') })
            .catch(console.error)
            this.componentDidMount()
    }

    redirectToHome = () => {
        return this.props.history.push('/')
    }

    render() {
        return (
            <div>
               
               <button className='button' onClick={this.redirectToHome}>QUIT GAME</button>
                <ScoreBoardList userScores={this.props.userScores} user={this.props.currentUser.userId} />
            
                {
                    this.props.lifes!==undefined &&
                    <Lifes lifes={this.props.lifes} />
                }
                {
                    this.props.answer &&
                    <div className='currentSession'>
                        <GameImage urlImage={this.props.answer.image} revealImage={this.revealImage} lifes={this.props.lifes}/> 
                        {
                            this.props.lifes!==undefined &&
                            <Game
                                paintings={this.props.paintings}
                                correctAnswer={this.props.answer}
                                checkAnswer={this.checkAnswer}
                                onSubmit={this.onSubmit}
                                userAnswer={this.props.userAnswer}
                            />
                        } 
                    </div>
                }
                {!this.props.answer && 'loading..'}
                {this.props.answer && this.props.lifes===undefined && 
                    <div id='endedSession'>
                        <h2>The correct answer is:<br />{this.props.answer.title} by {this.props.answer.artist}</h2>
                        <button className='button' onClick={this.onNext}>
                            Next session
                        </button>
                    </div>
                }
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        paintings: state.gamePaintings.paintings,
        answer: state.gamePaintings.correctAnswer,
        userAnswer: state.guessedAnswer.title,
        lifes: state.guessedAnswer.lifes,
        points: state.guessedAnswer.points,
        userScores: state.scoreBoard,
        currentUser: state.currentUser
    }
}
export default connect(mapStatetoProps, { getAnswers, guessedAnswer, getLifes, getPoints, onEvent, onNext })(GameContainer)