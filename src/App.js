import { useState } from 'react'
import './App.css'

const Button = ({ name, handleClick }) => (
  <button onClick={handleClick}>{name}</button>
)

const SingleStat = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, calcPositive, calcAverage }) => {
  const total = good + neutral + bad
  const statsTable = (
    <table>
      <tbody>
        <SingleStat name='Good' value={good} />
        <SingleStat name='Neutral' value={neutral} />
        <SingleStat name='Bad' value={bad} />
        <SingleStat name='Total Votes' value={total} />
        <SingleStat name='Average' value={calcAverage} />
        <SingleStat name='Positive' value={calcPositive} />
      </tbody>
    </table>
  )
  const displayStats =
    good + neutral + bad === 0 ? (
      <p>Please provide feedback to get started.</p>
    ) : (
      statsTable
    )

  return (
    <div>
      <h1>Statistics</h1>
      <div className='statisticsContainer'>{displayStats}</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAverage = ((good*1 + neutral*0 + bad*-1)/(good + neutral + bad)).toFixed(2)

  const calculatePercentPositive =
    good + neutral + bad === 0
      ? '0%'
      : ((good / (good + neutral + bad)) * 100).toFixed(2) + '%'

  return (
    <div className='outerContainer'>
      <div className='innerContainer'>
        <h1>Provide Feedback</h1>
        <div className='buttonsContainer'>
        <Button name='Good' handleClick={() => setGood(good + 1)} />
        <Button name='Neutral' handleClick={() => setNeutral(neutral + 1)} />
        <Button name='Bad' handleClick={() => setBad(bad + 1)} />

        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          calcPositive={calculatePercentPositive}
          calcAverage={calculateAverage}
        />
      </div>
    </div>
  )
}

export default App
