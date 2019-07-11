import React from 'react'

export default function Lifes(props) {
    const numberOfLifes = [...Array(props.lifes).keys()]
    return (
        <div className='Lifes'>
            {numberOfLifes.map(key => <img src='https://img.icons8.com/cotton/2x/like--v1.png' alt='hearth' key={key} width='40px'/>)}
        </div>
    )
}
