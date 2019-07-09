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
    render() {
        return (
            <div>
                <ImageList paintings={this.props.paintings} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        paintings: state.gamePaintings
    }
}
export default connect(mapStatetoProps, { getPaintings })(ImageListContainer)