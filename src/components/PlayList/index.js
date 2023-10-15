import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlayList = props => {
  const {item, onDelelteItem} = props
  const {imageUrl, name, genre, duration} = item

  const onClickDelete = () => {
    onDelelteItem(name)
  }

  return (
    <li className="list-item">
      <img src={imageUrl} alt="track" className="track-img" />
      <div className="list-inner-container">
        <div className="name-genre-container">
          <p className="name"> {name} </p>
          <p className="genre"> {genre} </p>
        </div>
        <div className="delete-container">
          <p className="duration"> {duration} </p>
          <button
            data-testid="delete"
            onClick={onClickDelete}
            className="button-el"
            type="button"
          >
            <AiOutlineDelete className="button-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PlayList
