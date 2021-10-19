import React from 'react'

export default function ProjectList({name,photo,description}) {
    
    
    return (
        <div>
            <h1>{name}</h1>
            <img src={photo}alt ="anthing"/>
            <p>{description}</p>
        </div>
    )
}
