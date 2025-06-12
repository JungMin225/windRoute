import React from 'react';
import { useNavigate } from 'react-router-dom';
import './List.css';

const ListPage = ({ lists }) => {
  const navigate = useNavigate();
  return (
    <div className="list-page-wrapper">
      {lists.map(list => {
        const allChecked = list.items.length > 0 && list.items.every(i => i.checked);
        return (
          <div
            key={list.id}
            className={`list-preview-card ${allChecked ? 'completed' : ''}`}
            onClick={() => navigate(`/travel-prep/${list.id}`)}
          >
            <h2>{list.title}</h2>
            <div className="memo-preview">{list.memo}</div>
            {list.items.length > 0 && (
              <ul className="item-preview-list">
                {list.items.map(item => (
                  <li
                    key={item.id}
                    className={`item-preview ${item.checked ? 'checked' : ''}`}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
      <button
        className="list-add-button"
        onClick={() => navigate('/travel-prep/new')}
      >
        <div className="plus-icon">+</div>
        <div>여행 준비물 추가하기</div>
      </button>
    </div>
  );
};

export default ListPage;