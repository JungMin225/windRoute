import React, { useState } from 'react';
import './TravelCloth.css';

const seasons = ['봄', '여름', '가을', '겨울'];
const codiData = {
  봄: [
    { id: 1, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/10/8efaf534a72647ca98c040986b3e8468.jpg?w=1000', label: '봄 코디 1' },
    { id: 2, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/12/4136c8055b0242029ededbc60cb9266c.jpg?w=1000', label: '봄 코디 2' },
    { id: 3, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/10/223d9efebd00407a8684b4e71c00522e.jpg?w=1000', label: '봄 코디 3' }
  ],
  여름: [
    { id: 1, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/12/43f525c2d48c4ee99135198eb3f90b56.jpg?w=1000', label: '여름 코디 1' },
    { id: 2, image: 'https://image.msscdn.net/thumbnails/display/images/usersnap/2023/07/22/2c1d574ef3a943d994684d4e4a7cbd9e.jpg?w=780', label: '여름 코디 2' },
    { id: 3, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/10/e7a3c3db068844f19d53988c45f66dc3.jpg?w=1000', label: '여름 코디 3' }
  ],
  가을: [
    { id: 1, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/08/d5d606f3dd0442cb91c79a68ed70bd9b.jpg?w=1000', label: '가을 코디 1' },
    { id: 2, image: 'https://image.msscdn.net/thumbnails/snap/images/2024/10/29/1891b92f74c54c1f8cd59552d57cc97b.jpg?w=1000', label: '가을 코디 2' },
    { id: 3, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/05/19/f702c00edd6f4a1780c764c6dcedb23a.jpg?w=1000', label: '가을 코디 3' }
  ],
  겨울: [
    { id: 1, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/09/9a01c06723ed4e37ae6f0d2292ea056b.jpg?w=1000', label: '겨울 코디 1' },
    { id: 2, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/05/0117de65e4db489687df6e3e6a11bdb2.jpg?w=1000', label: '겨울 코디 2' },
    { id: 3, image: 'https://image.msscdn.net/thumbnails/snap/images/2025/06/02/091c3fd1d9804975bb8a1c94941961c1.jpg?w=1000', label: '겨울 코디 3' }
  ]
};

const TravelCloth = () => {
  const [activeSeason, setActiveSeason] = useState('봄');
  return (
    <div className="travel-codi-wrapper">
      <h1 className="codi-title">여행 코디</h1>
      <div className="season-buttons">
        {seasons.map(season => (
          <button
            key={season}
            className={`season-btn ${activeSeason === season ? 'active' : ''}`}
            onClick={() => setActiveSeason(season)}
          >
            {season}
          </button>
        ))}
      </div>
      <div className="codi-grid">
        {codiData[activeSeason].map(item => (
          <div key={item.id} className="codi-card">
            <div
              className="codi-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            {/* <button className="codi-button">보러가기</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCloth;