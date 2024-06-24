import { useState } from 'react'
import './App.scss'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import Walpapers from './components/Walpapers'

function App() {
  const [language,setLanguage]=useState(false)

  function change(){
    setLanguage(!language)
  }
  return (
    <div className="App">
     
      <button className='button1'onClick={change}>{language?'ENG':'ՀԱՅ'}</button>
  
  
      {
        language ? (
          <>
            <Walpapers photo={'../photo1.jpg'} />
            <Walpapers photo={'../photo13.jpg'} />
            <Walpapers photo={'../photo2.jpg'} />
        
              <CountdownTimer change={language} CountdownTimestampMs={1721764800000} />
  
            
        
            
          </>
        ) : <>
        <Walpapers photo={'../photo1e.jpg'} />
            <Walpapers photo={'../nkarek.jpg'} />
            <Walpapers photo={'../photo3e.jpg'} />
            <CountdownTimer  change={language} CountdownTimestampMs={1721764800000} />
        </>
      }
    </div>
  )
}

export default App

