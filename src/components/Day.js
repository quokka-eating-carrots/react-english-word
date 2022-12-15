import React, { StrictMode } from 'react'
import { useParams } from 'react-router-dom'
import dummy from '../db/data.json'

function Day() {
  // const day = useParams().day
  const { day } = useParams()
  const wordList = dummy.words.filter(word => (
    word.day === +day
  ))


  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Day