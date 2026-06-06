import { useState } from 'react'
import { ZoomIn } from 'lucide-react'

export default function ImageGallery({ images, name }) {
  const [active, setActive] = useState(0)

  return (
    <div className="pdp-gallery">
      {/* Thumbnails */}
      <div className="pdp-thumbs">
        {images.map((img, i) => (
          <div
            key={i}
            className={`pdp-thumb ${i === active ? 'on' : ''}`}
            onClick={() => setActive(i)}
          >
            <img src={img} alt={`${name} view ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* Main image */}
      <div className="pdp-main zoom">
        <img
          src={images[active]}
          alt={`${name} — main view`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="pdp-zoomtag">
          <ZoomIn size={13} /> Zoom
        </div>
      </div>
    </div>
  )
}
