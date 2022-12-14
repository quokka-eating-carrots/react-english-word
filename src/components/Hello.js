import React, { useState } from 'react'
import World from './World'
import styles from './Hello.module.css'

function Hello(age) {
  const [name, setName] = useState('kiki ')
  function changeName() {
    setName(name === 'kiki' ? 'jiji' : 'kiki')
  }
  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}></button>
    </div>
  )
}

export default Hello