import React, {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import OneMoment from './components/Page1/OneMoment';
import RandomTravel from './components/Page2/RandomTravel';
import ListPage from './components/Page3/ListPage';
import ListEditPage from './components/Page3/ListEditPage';
import TravelCloth from './components/Page4/TravelCloth'
import TravelTipGallery from './components/page5/TravelTipGallery';

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, title: '기본 준비물', memo: '·여권 ·항공권 ·여행자보험 증서 ·현금 ·보조배터리 ·변환 어댑터 ·얇은 겉옷 ·편안한 신발 ·칫솔/치약/치실 ·상비약 ·여행용 자물쇠 ·비닐봉지 ·휴대용 우산', items: [] }
  ]);
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to="/OnePhoto" replace />} />

        <Route path="OnePhoto" element={<OneMoment />} />
        <Route path="RandomTravel" element={<RandomTravel />} />
        <Route path="travel-prep" element={<ListPage lists={lists} />} />
        <Route path="travel-prep/new" element={<ListEditPage lists={lists} setLists={setLists} />} />
        <Route path="travel-prep/:id" element={<ListEditPage lists={lists} setLists={setLists} />} />
        <Route path="TravelCloth" element={<TravelCloth />} />
        <Route path="TravelTip" element={<TravelTipGallery />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
