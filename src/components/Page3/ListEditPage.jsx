import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './List.css';

const ListEditPage = ({ lists, setLists }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = id && lists.find(l => l.id === Number(id));

  const [title, setTitle] = useState(editing?.title || '');
  const [memo, setMemo] = useState(editing?.memo || '');
  const [items, setItems] = useState(editing?.items || []);
  const [inputText, setInputText] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setMemo(editing.memo);
      setItems(editing.items);
    }
  }, [editing]);

  const addOrUpdateItem = () => {
    if (!inputText.trim()) return;
    if (editingItemId) {
      setItems(items.map(i =>
        i.id === editingItemId ? { ...i, text: inputText } : i
      ));
      setEditingItemId(null);
    } else {
      setItems([...items, { id: Date.now(), text: inputText, checked: false }]);
    }
    setInputText('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') addOrUpdateItem();
  };

  const startEditItem = item => {
    setEditingItemId(item.id);
    setInputText(item.text);
  };

  const toggleChecked = itemId => {
    setItems(items.map(i =>
      i.id === itemId ? { ...i, checked: !i.checked } : i
    ));
  };

  const handleSave = () => {
    const newList = { id: editing?.id || Date.now(), title, memo, items };
    if (editing) {
      setLists(lists.map(l => (l.id === newList.id ? newList : l)));
    } else {
      setLists([...lists, newList]);
    }
    navigate('/travel-prep');
  };

  return (
    <div className="list-edit-wrapper">
      <button className="back-btn" onClick={() => navigate(-1)}>취소하기</button>

      <h1 className="list-title">{editing ? '기본 준비물' : '새 목록 추가'}</h1>
      <input
        className="list-edit-title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="리스트 제목"
      />
      <textarea
        className="list-edit-memo"
        value={memo}
        onChange={e => setMemo(e.target.value)}
        placeholder="메모를 적어보세요!"
      />
      <div className="items-section">
        {items.map(item => (
          <div key={item.id}
               className="item-row"
               onDoubleClick={() => startEditItem(item)}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleChecked(item.id)}
              className="item-checkbox"
            />
            <div className="item-text">{item.text}</div>
            <button className="item-remove" onClick={() => setItems(items.filter(i => i.id !== item.id))}>X</button>
          </div>
        ))}
      </div>
      <div className="add-item-area">
        <button
          className="list-edit-add-item"
          onClick={addOrUpdateItem}
        >+
        </button>
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="준비물 입력"
        />
      </div>
      <button
        className="list-edit-save"
        onClick={handleSave}
      >저장하기</button>
    </div>
  );
};

export default ListEditPage;