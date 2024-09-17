import React, { useEffect, useState } from 'react'
import Layout from '../layout'

export const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);

    const handleGood = () => {
        setGood(good + 1)
    }
    const handleTotal = ()=>{
        setTotal(good + neutral + bad)
    }
        const handleAverage = ()=>{
        setAverage(total / 3)
    }
    useEffect(()=>{
        handleAverage() 
        handleTotal()
    },[good, neutral, bad])

  return (
    <Layout >
        <div>
            <button className='border p-1 m-2 rounded-md' onClick={handleGood}>Good</button>
            <button className='border p-1 m-2 rounded-md' onClick={()=> setNeutral(neutral + 1)}>Neutral</button>
            <button className='border p-1 m-2 rounded-md' onClick={()=> setBad(bad + 1)}>Bad</button>
        </div>
        {total > 0 ?
          <div className='mt-5'>
          <h1 className='font-bold my-3'>Statistics</h1>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {total}</p>
          <p>Average {average}</p> 
          <p>Positive {((good/total) * 100 || 0).toFixed(2)}%</p>
      </div> :
      <div>
         <h1 className='font-bold my-3'>No feedback given</h1>
      </div>
        }
        
    </Layout>
  )
}
