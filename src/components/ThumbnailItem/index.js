import './index.css'

const ThumbnailItem = props => {
  const {activeTabId, onChange, imgdetails} = props

  const onclick = () => {
    onChange(imgdetails.id)
  }

  return (
    <li onClick={onclick}>
      {imgdetails.id === activeTabId ? (
        <button>
          <img
            className="img2"
            alt={imgdetails.imageAltText}
            src={imgdetails.imageUrl}
          />
        </button>
      ) : (
        <button>
          <img
            className="img2"
            alt={imgdetails.thumbnailAltText}
            src={imgdetails.thumbnailUrl}
          />
        </button>
      )}
    </li>
  )
}

export default ThumbnailItem
