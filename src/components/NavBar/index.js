// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, isGameInProgress, currentScore} = props

  return (
    <nav className="nav-container">
      <div className="nav-app-container">
        <div className="header-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
