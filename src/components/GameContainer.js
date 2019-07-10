import React, { Component } from 'react'
import Game from './Game'
import './Game.css'
import {getAnswers} from '../actions/getPaintings'
import {guessedAnswer} from '../actions/checkAnswer'
import { connect } from 'react-redux'


class GameContainer extends Component {
    componentDidMount() {
        this.props.getAnswers()
    }
    checkAnswer =(event)=> {
        const titleName = event.target.innerHTML
        return this.props.guessedAnswer(titleName)     
    }
    onSubmit = () => {  
        if (this.props.userAnswer  === this.props.answer.title){
            console.log(true)
            return true
        }
        else{
            console.log(false)
            return false
        }
    }
    
    render() {
       
        return (
            
            <div>
                {this.props.answer && <Game paintings={this.props.paintings} correctAnswer={this.props.answer} checkAnswer={this.checkAnswer} onSubmit={this.onSubmit} />}
                {!this.props.answer && 'loading..'}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        paintings: state.gamePaintings.paintings,
        answer: state.gamePaintings.correctAnswer,
        userAnswer: state.guessedAnswer.title
    }
}
export default connect(mapStatetoProps, {getAnswers, guessedAnswer} )(GameContainer)