import React from 'react'
import TabButton from './TabButton';
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from './Section';
import Tabs from './Tabs';


export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState('')

let tabContent = <p>Please select a topic.</p>;

function handleSelect(selectedButton){
  setSelectedTopic(selectedButton)
}

if(selectedTopic){
  tabContent = (
    <div id="tab-content">
      <h3> {EXAMPLES[selectedTopic].title}</h3>
      <p> {EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
      {EXAMPLES[selectedTopic].code}
        </code>
      </pre>

    </div>
  )
}

  return (
    <Section id="examples" title="Examples">
        <Tabs 
        // buttonsContainer= 'menu'
        buttons ={<>
            <TabButton 
        isSelect = {selectedTopic === 'components'}
        onClick={() =>{handleSelect(
          'components'
        )}}>Components</TabButton>
        <TabButton
        isSelect = {selectedTopic === 'jsx'}
        onClick={() => {handleSelect('jsx')}}>JSX</TabButton>
        <TabButton
        isSelect = {selectedTopic === 'props'}
        onClick={() => {handleSelect('props')}}>Props</TabButton>
        <TabButton 
        isSelect = {selectedTopic === 'state'}
        onClick={() => {handleSelect('state')}}>State</TabButton>
        </>}> {tabContent} </Tabs>
    <menu>
    
    </menu>
   
  </Section>
  )
}
