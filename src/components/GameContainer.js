import React, { Component } from 'react'
import Game from './Game'
import './Game.css'
import {getPaintings} from '../actions/getPaintings'
import { connect } from 'react-redux'


class GameContainer extends Component {
    state = {paintings: []}
    urlImage = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Kandinsky_-_Jaune_Rouge_Bleu.jpg'
    
    componentDidMount() {
        this.props.getPaintings()
    }
    checkAnswer(artists, painting) {
        const answer = artists.find(artist => artist.id === painting.artistId)
        if(!answer) return false
        return true
    }
    render() {
       
        return (
            <div>
                <Game urlImage={this.urlImage}/>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        paintings: state.gamePaintings
    }
}
export default connect(mapStatetoProps, {getPaintings})(GameContainer)