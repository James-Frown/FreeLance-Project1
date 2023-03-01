import './App.css'
import Flixcard from './componenets/Flixcard'

function App() {
  return (
    <div className="App">
      <nav id="Navigation__Section" className="App__Navigation">HI IM THE NAVIGATION</nav>
      <div id="Hero__Section" className="App__Hero">
        <div className="Hero__Title__Wrapper">
          <h1  id="Hero__Title" className="Hero__Title">
            Welcome to Free-4-Days
          </h1>
        </div>
        <div className="Hero__Subtitle__Wrapper">
          <h2  id="Hero__Subitle" className="Hero__Subitle">
            This is a Soap2day Clone
          </h2>
        </div>
        <div className="Hero__Description__Wrapper">
          <p  id="Hero__Description" className="Hero__Description">
            Why pay for Netflix or be bothered by ad's, when you can just stream here for free!!
          </p>
        </div>
      </div>
      <div id="Content__Section__Subitle" className="Content__Section__Subitle">
          <h2  id="Content__Subitle" className="Content__Subitle">
            Below are our Fetured Films
          </h2>
      </div>
      <div id="Content__Section" className="App__Content">
        <Flixcard Image="https://image.tmdb.org/t/p/w185/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg" Name="Captin America: The First Avenger" Director="Joe Johnston" Description="Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization." Url="https://soap2day.works/frost-bite-2/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg" Name="Cocain Bear" Director="Elizabeth Banks" Description="An oddball group of cops, criminals, tourists, and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine." Url="https://soap2day.works/cocaine-bear-jVfwCf/" />
      </div>
      <div id="Footer__Section" className="App__Footer">HI IM THE FOOTER</div>
    </div>
  )
}

export default App
