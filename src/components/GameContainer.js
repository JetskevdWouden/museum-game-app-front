import React, { Component } from 'react'
import Game from './Game'
import Lifes from './Lifes';
import GameImage from './GameImage';
import './Game.css'
import './Button.css'
import { getAnswers } from '../actions/getPaintings'
import { guessedAnswer } from '../actions/checkAnswer'
import { getLifes } from '../actions/game'
import { getPoints } from '../actions/game'
import { connect } from 'react-redux'

class GameContainer extends Component {
    componentDidMount() {
        this.props.getAnswers()
        this.props.getLifes(7)
    }
    checkAnswer = (event) => {
        const titleName = event.target.innerHTML
        return this.props.guessedAnswer(titleName)
    }
    onSubmit = () => {
        if (this.props.userAnswer === this.props.answer.title) {
            return this.props.getPoints(this.props.lifes, 10)
        }
        else {
            return this.props.getPoints(this.props.lifes, 1)
        }
    }
    revealImage =(event) => {
        if (this.props.lifes > 0){
            event.target.style.visibility = 'hidden'
            this.props.getLifes(this.props.lifes)
        }
    }
    onNext = (event) => {
        this.componentDidMount()
    }

    render() {
        
        return (
            <div>
               {this.props.lifes!==undefined && <Lifes lifes={this.props.lifes} />}
                {this.props.answer &&
                <div className='currentSession'>
                    <GameImage urlImage={this.props.answer.image} revealImage={this.revealImage} lifes={this.props.lifes}/> 
                    {this.props.lifes!==undefined && <Game paintings={this.props.paintings} correctAnswer={this.props.answer} checkAnswer={this.checkAnswer} onSubmit={this.onSubmit} userAnswer={this.props.userAnswer}  />} 
                </div>
                }
                {!this.props.answer && 'loading..'}
                {this.props.answer && this.props.lifes===undefined && 
                    <div id='endedSession'>
                        <h2>The correct answer is:<br />{this.props.answer.title} by {this.props.answer.artist}</h2>
                        <button className='button' onClick={this.onNext}>Next session</button>
                    </div>
                }
                
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        paintings: state.gamePaintings.paintings,
        answer: state.gamePaintings.correctAnswer,
        userAnswer: state.guessedAnswer.title,
        lifes: state.guessedAnswer.lifes,
        points: state.guessedAnswer.points
    }
}
export default connect(mapStatetoProps, { getAnswers, guessedAnswer, getLifes, getPoints })(GameContainer)