import React from 'react'
import './GameImage.css'

export default function GameImage (props) {
    
        
        
        return (
            <div className='imageContainer'>
                <div className='imageDiv'>

                        <ul className='imagePixelsContainer'>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                            <li className='imagePixel'></li>
                        </ul>
                        
                    <img src={props.urlImage} id='image' alt='kandinsky'/>
                </div>
                
            </div>
        )
    }

