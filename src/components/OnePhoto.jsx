import React, { useState, useEffect } from 'react';

const photos = [
  "https://via.placeholder.com/400x250?text=1번+사진",
  "https://via.placeholder.com/400x250?text=2번+사진",
  "https://via.placeholder.com/400x250?text=3번+사진"
];

const PhotoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏱️ 사진 자동 넘기기 (3초마다)
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 3000); // 3초마다

    return () => clearInterval(interval); // 모달 닫으면 정리
  }, [isOpen]);

  // 모달 열기
  const openModal = () => {
    setIsOpen(true);
    setCurrentIndex(0); // 항상 첫 번째 사진부터
  };

  // 모달 닫기
  const closeModal = () => {
    setIsOpen(false);
  };

  // 수동 넘기기
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  return (
    <>
      <button onClick={openModal}>📸 사진 보기</button>

      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <img
              src={photos[currentIndex]}
              alt="사진"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <div style={styles.controls}>
              <button onClick={nextImage}>다음 ▶</button>
              <button onClick={closeModal}>닫기 ❌</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 999
  },
  modal: {
    width: '400px', background: 'white',
    padding: '20px', borderRadius: '15px',
    boxShadow: '0 0 10px #000'
  },
  controls: {
    display: 'flex', justifyContent: 'space-between',
    marginTop: '10px'
  }
};

export default PhotoModal;