import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Message, setMessage] = useState('')

  useEffect(() => {
    (async function(){
      try {
      const gotMessageJson = await fetch('https://geo-backend-tiev.vercel.app/hello')
      console.log(gotMessageJson)
      const gotMessage = await gotMessageJson.json()
      setMessage(gotMessage)
    } catch (error) {
      console.warn(error)
    }
    })()
  }, [])

  const handleLatLongClick = async (e) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function success(position){
            const {latitude, longitude} = position.coords /*
            const gotDataJson = await fetch('https://xxx.vercel.app/geolocation&#39;, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({latitude, longitude})
            }) */

        }, console.warn)
    }
}  

  return (
    <>
      <h1>Geo</h1>
      <div className="card">
        <button onClick={handleLatLongClick}>
          Store geolocation
        </button>
        <p>
          <ol>
            <li>Latitude: {"todo"}</li>
            <li>Longitude: {"todo"}</li>
          </ol>
        </p>
      </div>

      <div className="card">
        <p>Message: {Message?.message}</p>
      </div>
    </>
  )
}

export default App
