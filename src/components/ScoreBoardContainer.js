import React from 'react';
//import * as request from 'superagent';
import { connect } from 'react-redux';
import { onEvent } from '../actions/scoreBoard';
import ScoreBoardList from './ScoreBoardList';

class ScoreBoardContainer extends React.Component {

    basUrl = 'https://protected-eyrie-79199.herokuapp.com'
    // //basUrl = heroku base link

    //streamUrl = `${this.basUrl}/stream/:gameId`
    streamUrl = `${this.basUrl}/stream/5`
    // //gameId = this.streamUrl.params.gameId //right? --> console.log

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

//export default ScoreBoardContainer;
export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardContainer)