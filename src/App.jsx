import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PrimarySearchAppBar from './c/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/navbar-logo.webp'
import LabTabs from './c/Tabs';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container-xl">
      <PrimarySearchAppBar />
      <div className='middle'>
        <img src={logo} alt="" />
          <LabTabs></LabTabs>
          <div class="trade_arrows"></div>
      </div>
    </div>
  )
}

export default App
