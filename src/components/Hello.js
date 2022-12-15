import React, { useState } from 'react'
import World from './World'
import styles from './Hello.module.css'
import UserName from './UserName'

function Hello({ age }) {
  const [name, setName] = useState('kiki')
  const msg = age > 19 ? "성인입니다." : "미성년자입니다."
  return (
    <div>
      <h2 id="name">{name}({age}) : {msg}</h2>
      <UserName name={name} />
      <button onClick={() => {
        setName(name === 'kiki' ? 'jiji' : 'kiki')
      }
      }>change</button>
    </div>
  )
}

export default Hello