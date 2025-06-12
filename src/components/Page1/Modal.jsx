import React from 'react';

const Modal = ({ cityData, onClose }) => {
  if (!cityData) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-body">
          <img
            src={cityData.image}
            alt={cityData.name}
            className="modal-image"
          />
          <div className="modal-text">
            <h2>{cityData.name}</h2>
            <p>{cityData.location}</p>
            <p>{cityData.attraction}</p>
          </div>
        </div>
      </div>

      <style>{`
        .modal {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-content {
          background:rgb(173, 211, 255);
          border-radius: 10px;
          width: 80vw;
          max-width: 600px;
          padding: 1.5rem;
          position: relative;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .modal-image {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          border-radius: 8px;
        }

        .modal-text {
          text-align: center;
          font-size: 1rem;
          color: #333;
        }

        .close-btn {
          position: absolute;
          top: 2px;
          right: 15px;
          background: none;
          border: none;
          font-size: 0.8rem;
          cursor: pointer;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Modal;
