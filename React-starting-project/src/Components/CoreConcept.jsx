import React from 'react'

export default function CoreConcept({image, title, description}) {
  return (
    <div>
      <li>

        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>

    </div>
  )
}
