// Write your code here
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {item} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = item
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div>
              <button
                type="button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
            </div>
            <ReactPlayer url={videoUrl} />
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
