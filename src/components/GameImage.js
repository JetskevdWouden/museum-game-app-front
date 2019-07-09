import React, { Component } from 'react'
import './GameImage.css'

export default class GameImage extends Component {
    render() {

        const urlImage = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Kandinsky_-_Jaune_Rouge_Bleu.jpg'
        
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
                        
                    
                    <img src={urlImage} id='image' alt='kandinsky'/>
                </div>
                
            </div>
        )
    }
}
