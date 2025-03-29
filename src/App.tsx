import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tailwindcss from '@tailwindcss/vite'
import Nav from './components/Bar.tsx'
import Intro from './pages/Intro.tsx';
import Work from './pages/Work.tsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Intro/>
      <Work/>
    </>
  )
}

export default App
