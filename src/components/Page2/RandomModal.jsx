// RandomModal.jsx
import React from 'react';
import './RandomModal.css';

const RandomModal = ({ dest, onClose, onRePick }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="modal-body">
          <div className="random-modal-image">
            <img src={dest.image} alt={dest.name} />
          </div>
          <div className="modal-text">
            <p>“{dest.displayName}”님께 추천드리는 여행지!</p>
            <h2>{dest.name}</h2>
            <p>위치: {dest.location}</p>
            <p>편도 비행 시간: {dest.flightTime}</p>
            <p>관광 명소: {dest.attraction}</p>
            <p>{dest.description}</p>
          </div>
        </div>

        <div className="modal-actions">
          <button className="repick-button" onClick={onRePick}>
            다시 뽑기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomModal;
