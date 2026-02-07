import React from 'react'
import './App.css'
import Adjustment from './components/Adjustment/Adjustment'
import PREVIEW from './components/Preview/PREVIEW.jsx'
// import FILEINFO from './components/FileInfo/FileInfo'

function App() {

return (
  <section id='userInterface'>
    <Adjustment title="ADJUSTMENTS" />
    <PREVIEW title="TEST"/>
    {/* <PREVIEW title="TEST"/> */}
    {/* <FILEINFO title="FILE INFORMATION" /> */}
  </section>
)
}

export default App
