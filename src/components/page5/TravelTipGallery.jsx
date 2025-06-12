  import React, { useState, useEffect } from 'react';
  import './TravelTipGallery.css';
  
  // 팁 이미지 리스트 예시
  const tipImages = [
    `${process.env.PUBLIC_URL}/img/0101.png`,
    `${process.env.PUBLIC_URL}/img/0102.png`,
    `${process.env.PUBLIC_URL}/img/0103.png`,
    `${process.env.PUBLIC_URL}/img/0104.png`,
    `${process.env.PUBLIC_URL}/img/0201.png`,
    `${process.env.PUBLIC_URL}/img/0202.png`,
    `${process.env.PUBLIC_URL}/img/0203.png`,
    `${process.env.PUBLIC_URL}/img/0301.png`,
    `${process.env.PUBLIC_URL}/img/0302.png`,
    `${process.env.PUBLIC_URL}/img/0303.png`,
    `${process.env.PUBLIC_URL}/img/0401.png`,
    `${process.env.PUBLIC_URL}/img/0402.png`,
    `${process.env.PUBLIC_URL}/img/0403.png`,
    `${process.env.PUBLIC_URL}/img/0404.png`,
  ];
  

  const TravelTipGallery = () => {
    const [selectedIdx, setSelectedIdx] = useState(null);
  
    const openModal = idx => setSelectedIdx(idx);
    const closeModal = () => setSelectedIdx(null);
    const prevImage = e => {
      e.stopPropagation();
      setSelectedIdx((selectedIdx + tipImages.length - 1) % tipImages.length);
    };
    const nextImage = e => {
      e.stopPropagation();
      setSelectedIdx((selectedIdx + 1) % tipImages.length);
    };
  
    // ESC 키 닫기
    useEffect(() => {
      const handleKey = e => { if (e.key === 'Escape') closeModal(); };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }, []);
  
    // ★ 모달 열렸을 때 3초마다 자동 슬라이드
    useEffect(() => {
      if (selectedIdx === null) return;       // 모달이 열리지 않았으면 동작하지 않음
      const timer = setInterval(() => {
        setSelectedIdx(prev => (prev + 1) % tipImages.length);
      }, 10000);
      return () => clearInterval(timer);       // 모달 닫히거나 selectedIdx 바뀌면 정리
    }, [selectedIdx]);
  
    return (
      <div className="tip-gallery-wrapper">
        <h1 className="tip-gallery-title">여행 팁</h1>
  
        <div className="tip-gallery-grid">
          {tipImages.map((src, idx) => (
            <div
              key={idx}
              className="tip-thumb"
              style={{ backgroundImage: `url(${src})` }}
              onClick={() => openModal(idx)}
            />
          ))}
        </div>
  
        {selectedIdx !== null && (
          <div className="tip-modal-overlay" onClick={closeModal}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <button className="modal-nav prev" onClick={prevImage}>❮</button>
  
            <div className="modal-image-container" onClick={e => e.stopPropagation()}>
              <img
                src={tipImages[selectedIdx]}
                alt={`팁 이미지 ${selectedIdx + 1}`}
              />
            </div>
  
            <button className="modal-nav next" onClick={nextImage}>❯</button>
          </div>
        )}
      </div>
    );
  };
  
  export default TravelTipGallery;