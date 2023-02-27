import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav id="Navigation__Section" className="App__Navigation">HI IM THE NAVIGATION</nav>
      <div id="Hero__Section" className="App__Hero">
        <div className="Hero__Title__Wrapper">
          <h1  id="Hero__Title" className="Hero__Title">
            Welcome to Free-Flix
          </h1>
        </div>
        <div className="Hero__Subtitle__Wrapper">
          <h2  id="Hero__Subitle" className="Hero__Subitle">
            This is a Netflix Clone
          </h2>
        </div>
        <div className="Hero__Description__Wrapper">
          <p  id="Hero__Description" className="Hero__Description">
            Why pay for Netflix, when you can just stream here, for free!!
          </p>
        </div>
      </div>
      <div id="Content__Section" className="App__Content">HI IM THE CONTENT</div>
      <div id="Footer__Section" className="App__Footer">HI IM THE FOOTER</div>
    </div>
  )
}

export default App
