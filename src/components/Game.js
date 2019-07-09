import React from 'react'
import GameImage from './GameImage';

export default function Game(props) {
        return (
            <div>
                <GameImage urlImage={props.urlImage} />
            </div>
        )

}
