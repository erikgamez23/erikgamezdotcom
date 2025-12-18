import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import erikPhoto from '/erik.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return <MantineProvider>{
    (
      <>
        <div>
          {/* <a href="https://vite.dev" target="_blank"> */}
            <img src={erikPhoto} className="erikPhoto" alt="Erik Gamez" />
          {/* </a> */}
        </div>
        <h1> Hey, thanks for visiting! </h1>
        <h2> Not sure how often I'll update, but I'll try and keep it fresh. </h2>
        
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
        </div> */}
        
      </>
    )
  }</MantineProvider>
}

export default App
