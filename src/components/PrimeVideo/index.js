// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  console.log(actionMovies)
  console.log(comedyMovies)
  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1 className="heading">Action Movies</h1>
      <MoviesSlider details={actionMovies} />
      <h1 className="heading">Comedy Movies</h1>
      <MoviesSlider details={comedyMovies} />
    </div>
  )
}
export default PrimeVideo
