import React from 'react';
import { connect } from 'react-redux';
import { onEvent } from '../actions/scoreBoard';
import ScoreBoardList from './ScoreBoardList';

class ScoreBoardContainer extends React.Component {

<<<<<<< HEAD
    //basUrl = 'http://localhost:5000'
    basUrl = 'https://protected-eyrie-79199.herokuapp.com'
=======
    basUrl = 'https://protected-eyrie-79199.herokuapp.com'
    // //basUrl = heroku base link
>>>>>>> eafcae03aa88cd176da844cb8536a7863c3438aa

    gameId = this.props.match.params.id

    streamUrl = `${this.basUrl}/stream/${this.gameId}`

    source = new EventSource(this.streamUrl)

    componentDidMount() {
        this.source.onmessage = this.props.onEvent
    }

    render() {
        return (
            <ScoreBoardList userScores={this.props.userScores} />
        )
    }
}

function mapStateToProps(state) {
    console.log("STATE", state.scoreBoard)
    return {
        userScores: state.scoreBoard
    }
}

const mapDispatchToProps = { onEvent }

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardContainer)