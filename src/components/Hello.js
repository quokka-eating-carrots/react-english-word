import React from 'react'
import World from './World'
import styles from './Hello.module.css'

function Hello() {
  function showName() {
    console.log('kiki')
  }
  function showAge(age) {
    console.log(age)
  }
  function showText(txt) {
    console.log(txt)
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={() => {
        showAge(10)
      }}>Show age</button>
      <input type="text" onChange={e => {
        const txt = e.target.value
        showText(txt)
      }} />
    </div>
  )
}

export default Hello