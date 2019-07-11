import React from 'react'

export default function Game(props) {
   
    console.log(props.userAnswer)
        return (
            <div className='gameContainer'>
                
                
                    <ul className='listOfanswers'>
                        {props.paintings
                            .map(painting =>
                                <li 
                                key={painting.id} 
                                id={painting.id} 
                                className={props.userAnswer === painting.title ? 'active answer' : 'answer'}
                                onClick={props.checkAnswer}>
                                    {painting.title}
                                </li>
                            )}
                    </ul>
                    <button onClick={props.onSubmit} className='button'>send answer</button>
                 
                
                
            </div>
        
        )

}
