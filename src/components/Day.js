import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFecth'
import Word from './Word'

function Day() {
  const days = useFetch("http://localhost:3001/days")
  const { day } = useParams()
  const history = useNavigate()
  const words = useFetch(`http://localhost:3001/words?day=${day}`)

  function prevPage() {
    history(`/day/${+day === 1 ? 1 : +day - 1}`)
  }

  function nextPage() {
    history(`/day/${+day === days.length ? days.length : +day + 1}`)
  }

  function delDay() {
    if (window.confirm('삭제하겠습니까?')) {
      fetch(`http://localhost:3001/days/${day}`, {
        method: 'DELETE'
      }).then(res => {
        if (res.ok) {
          history('/')
        }
      })
    }
  }

  return (
    <>
      <div className="day">
        <button onClick={prevPage}>◀️</button>
        <h2>Day {day}</h2>
        <button onClick={nextPage}>▶️</button>
        <button onClick={delDay}>날짜 삭제</button>
      </div>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Day