import React from 'react'

let Random = ['Fundamental', 'Essential', 'Crucial']

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
let RandomText= Random[getRandomNumber(3)]



export default function Header() {
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {RandomText} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
