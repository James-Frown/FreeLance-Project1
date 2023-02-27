import '../App.css'

function Flixcard() {
  return (
    <div className="Flixcard">
      <div className="Flixcard__Wrapper">
        <div className="Flixcard__Image">
          <img className="Image__BorderRaduis" src="https://picsum.photos/300/300" alt="image for movie"></img>
        </div>
        <div className="Flixcard__Content__Wrapper">
          <p className="Flixcard__Name">
            Desasteriod
          </p>
          <p className="Flixcard__Producer">
            Marvel Studios
          </p>
          <p className="Flixcard__Description">
            Wars all scarring the earth, this massive asterioid is heading straight for us. what will, liam neilson do with his survival team!
          </p>
          <div className="Flixcard__Link">
            <a className="Flixcard__Movie__Link" href="https://soap2day.monster/">Click Here</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flixcard