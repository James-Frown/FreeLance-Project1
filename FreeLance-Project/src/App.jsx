import './App.css'
import Flixcard from './componenets/Flixcard'

function App() {
  return (
    <div className="App">
      <nav id="Navigation__Section" className="App__Navigation">
        <a className="Navigation__Text" href="#Content__Section__Movies_Subitle">Movies</a>
        <a className="Navigation__Text" href="#Content__Section__Series_Subitle">Series</a>
      </nav>
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
      <div id="Content__Section__Movies_Subitle" className="Content__Section__Subitle">
          <h2  id="Content__Subitle" className="Content__Subitle">
            Our Movies:
          </h2>
      </div>
      <div id="Content__Section_Movies" className="App__Content">
        <Flixcard Image="https://image.tmdb.org/t/p/w185/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg" Name="Captin America: The First Avenger" Director="Joe Johnston" Description="Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization." Url="https://soap2day.works/frost-bite-2/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg" Name="Cocain Bear" Director="Elizabeth Banks" Description="An oddball group of cops, criminals, tourists, and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine." Url="https://soap2day.works/cocaine-bear-jVfwCf/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/oBvKapnLAIrSSUYwMJvt3oQfT2u.jpg" Name="Expedition Mars" Director="Mark Davis" Description="Expedition Mars brings to life one of the greatest sagas of the Space Age, the epic adventures of Spirit and Opportunity, the rovers that saved NASA's Mars program after a string of failures in the 1990's." Url="https://soap2day.works/expedition-mars-9ijZtQ/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg" Name="Arrival" Director="Denis Villeneuve" Description="A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world." Url="https://soap2day.works/arrival-1XSt5y/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" Name="Ant-Man and the Wasp: Quantumania" Director="Peyton Reed" Description="Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible." Url="https://soap2day.works/ant-man-and-the-wasp-quantumania-L6UymX/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/2oQ3y3PzediGvFG6ZQyuQn5k3Oh.jpg" Name="Monster" Director="Tom Sullivan" Description="Ireland, 1845. As the famine progresses, a fisherman unable to protect his family is subsumed by darkness until a helpless little girl saves him from despair." Url="https://soap2day.works/monster-hwjXP4/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg" Name="Jung_E" Director="Sang-ho Yeon" Description="On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary." Url="https://soap2day.works/jung-e-Fb7qWx/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/8HCCYAIocXxMKn7J9yQfDX1vBM5.jpg" Name="The Old Way" Director="Brett Donowho" Description="An old gunslinger and his daughter must face the consequences of his past, when the son of a man he murdered years ago arrives to take his revenge." Url="https://soap2day.works/the-old-way-7DmJQP/" />
      </div>
      <div id="Content__Section__Series_Subitle" className="Content__Section__Subitle">
          <h2  id="Content__Subitle" className="Content__Subitle">
            Our Series:
          </h2>
      </div>
      <div id="Content__Section_Series" className="App__Content">
        <Flixcard Image="https://image.tmdb.org/t/p/w185/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" Name="Breaking Bad" Director="Vince Gilligan" Description="A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future." Url="https://soap2day.works/tvshows/breaking-bad-FqWAGN/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/jFUZebOjrjZfvg7ZSrc19GvTRTg.jpg" Name="Shrinking" Director="N/A" Description="A grieving therapist starts to tell his clients exactly what he thinks. Ignoring his training and ethics, he finds himself making huge changes to people's lives - including his own." Url="https://soap2day.works/tvshows/shrinking-f5K8xu/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg" Name="The Last of Us" Director="Neil Druckmann, Craig Mazin" Description="Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to endure brutal circumstances and ruthless killers on a trek across post-pandemic America." Url="https://soap2day.works/tvshows/the-last-of-us-we28Vo/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/thqmhjLaMf2n0Ebl7oLRjH6VD15.jpg" Name="The Consultant" Director="N/A" Description="Follows a relationship between employee and boss, asking how far we will go to get ahead, and to survive." Url="https://soap2day.works/tvshows/the-consultant-aJMZf5/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/6pGiYwbSAscG6YyNzxTR6FNtLnO.jpg" Name="The Ark" Director="N/A" Description="Follows the remaining crew of a spacecraft known as Ark One, who must become the best versions of themselves to stay on course and survive after experiencing a catastrophic event that caused massive destruction and loss of life." Url="https://soap2day.works/tvshows/the-ark-R7h3OU/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/mt48ZPqJEu9Qv7ME6Yj21U8iutM.jpg" Name="BattleBots" Director="Greg Munson, Ed Roski" Description="BattleBots is a robot combat competition that takes place in an elimination style tournament. Designers build, operate and battle their destructive robots until a champion is crowned." Url="https://soap2day.works/tvshows/battlebots/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/8s1NLGpOcEWbz2clNdHwJdAvdQo.jpg" Name="Unearthed" Director="N/A" Description="Exploration of great archaeological discoveries, fascinating ancient civilizations, forgotten architectural marvels and tantalizing historical mysteries" Url="https://soap2day.works/tvshows/unearthed/" />
        <Flixcard Image="https://image.tmdb.org/t/p/w185/2Sr5vUfS82Byu1TWtMD1obNeX6T.jpg" Name="Catfish: The TV Show" Director="Nev Schulman" Description="Nev Schulman and Max Joseph help people who have fallen in love online test the authenticity of their lovers' identities." Url="https://soap2day.works/tvshows/catfish-the-tv-show/" />
      </div>
      <div id="Footer__Section" className="App__Footer">
        <div className="Footer__Section__Wrapper">
          <p className="Footer__Section__Text">
            Layout and development Copy Right @JamesBrown, please note that this is not original content, however this is simply a proof of concept and a learning experience!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
