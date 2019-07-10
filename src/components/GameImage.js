import React from 'react'
import './GameImage.css'

export default function GameImage (props) {
        return (
            <div className='imageContainer'>
                <div className='imageDiv'>

                        <ul className='imagePixelsContainer'>
                            <li className='imagePixel' onClick={props.revealImage}></li>
                            <li className='imagePixel' onClick={props.revealImage}></li>  
                            <li className='imagePixel' onClick={props.revealImage}></li>
                            <li className='imagePixel' onClick={props.revealImage}></li>
                            <li className='imagePixel' onClick={props.revealImage}></li>
                            <li className='imagePixel' onClick={props.revealImage}></li>
                            <li className='imagePixel' onClick={props.revealImage}></li>
                            <li className='imagePixel' onClick={props.revealImage}></li>
                            <li className='imagePixel' onClick={props.revealImage}></li>
                        </ul>
                        
                    <img src={props.urlImage} id='image' alt='kandinsky'/>
                </div>
                
            </div>
        )
    }

