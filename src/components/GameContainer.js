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
    render() {
        
        return (
            <div>
                <Game urlImage={this.urlImage}/>
            </div>
        )
    }
}

const mapmapStatetoProps = (state) => {
    return state
}
export default connect(mapmapStatetoProps, {getPaintings})(GameContainer)