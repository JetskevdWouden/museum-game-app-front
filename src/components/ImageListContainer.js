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
            <div>
                <button className='button' onClick={this.redirectToGameInstruction}>How does the game work?</button>
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