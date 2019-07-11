import React from 'react'
import './GameImage.css'

export default function GameImage (props) {
    const numberOfSquares = [...Array(36).keys()]
        return (
            <div className='imageContainer'>
                <div className='imageDiv'>
                    {props.lifes!==undefined  &&
                        <ul className='imagePixelsContainer'>
                            {numberOfSquares.map(key=><li className='imagePixel' onClick={props.revealImage} key={key}></li>)}
                        </ul>
                    }
                    <img src={props.urlImage} id='image' alt='guess the painting'/>
                </div>
                
            </div>
        )
    }

