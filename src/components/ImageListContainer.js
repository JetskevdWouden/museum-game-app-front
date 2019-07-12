import React, { Component } from 'react'
import ImageList from './ImageList'
import './ImageList.css'
import { getPaintings } from '../actions/getPaintings'
import { connect } from 'react-redux'

class ImageListContainer extends Component {
    state = { paintings: [] }
    componentDidMount() {
        this.props.getPaintings()
    }

    redirectToGameInstruction = () => {
        return this.props.history.push('/instructions')
    }
    
    render() {
        return (
            <div><div className='header'>
            <h1>Hello, welcome to the Museum Game!</h1>
            <p className='intro'>Have a look to our paintings below.<br/>If you want to play the game you can login or sign up.
            <br/>When the game starts you will see a covered painting.<br/>You can discover the painting by clicking on it and then you can guess the title of the picture. 
            <br />Try to be fast in your choices, don't make other players wait for you. </p>
           
            </div>
                <ImageList paintings={this.props.paintings} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        paintings: state.gamePaintings.paintingsHome
    }
}
export default connect(mapStatetoProps, { getPaintings })(ImageListContainer)