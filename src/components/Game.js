import React from 'react'
import GameImage from './GameImage';

export default function Game(props) {
   
    
        return (
            <div>
                <GameImage urlImage={props.correctAnswer.image} /> 
                 <form className='listOfanswers'>
                    {props.paintings
                        .map(painting =>
                            <li key={painting.id} id={painting.id} className='answer' onClick={props.checkAnswer}>
                                {painting.title}
                            </li>
                        )}
                 </form>
                 <button onClick={props.onSubmit}>send answer</button>
            </div>
        )

}
