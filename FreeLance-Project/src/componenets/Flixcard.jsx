import '../App.css'

function Flixcard() {
  return (
    <div className="Flixcard">
      <div className="Flixcard__Wrapper">
        <div className="Flixcard__Image">
          <img src="https://picsum.photos/300/300" alt="image for movie"></img>
        </div>
        <div className="Flixcard__Name">
          Desasteriod
        </div>
        <div className="Flixcard__Producer">
          Marvel Studios
        </div>
        <div className="Flixcard__Description">
          Wars all scarring the earth, this massive asterioid is heading straight for us. what will, liam neilson do with his survival team!
        </div>
        <div className="Flixcard__Link">
          <a className="Flixcard__Movie__Link">Click Here</a>
        </div>
      </div>
    </div>
  )
}

export default Flixcard