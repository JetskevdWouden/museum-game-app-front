import React from 'react'

export default function ImageList(props) {
    
    const paintings = props.paintings
    return (
        <div>
            
            <ul className='paintingList'>
                {paintings && 
                    paintings
                        .map( painting => 
                            <li key={painting.id} className='pictures'>
                                <img src={painting.image} alt={painting.title} />
                                <p>{painting.title}</p>
                            </li>
                            )
                }
                {!paintings && <li>loading...</li>}
            </ul>
        </div>
    )

}
