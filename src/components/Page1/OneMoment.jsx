import React, { useState } from 'react';
import './OneMoment.css';
import Modal from './Modal';

const moments = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/gwangan-bridge-haeundae-busan-korea_335224-402.jpg?semt=ais_hybrid&w=740',
    text: '01해운대',
    position: { top: '10%', left: '5%' },
    cityData: {
      name: '부산광역시',
      location: '부산광역시 해운대구 중동2로 11 (중동)',
      attraction: '해운대',
      image: 'https://img.freepik.com/free-photo/gwangan-bridge-haeundae-busan-korea_335224-402.jpg?semt=ais_hybrid&w=740'
    }
  },
  {
    id: 2,
    image: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/cab58b98-50f2-4b6e-bb85-fbbebecfb3dd.jpeg',
    text: '02디즈니랜드',
    position: { top: '25%', left: '33%' },
    cityData: {
      name: '도쿄',
      location: '1-1 Maihama, Maihama, Urayasu 279-0031 Chiba Prefecture',
      attraction: '디즈니랜드',
      image: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/cab58b98-50f2-4b6e-bb85-fbbebecfb3dd.jpeg'
    }
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/1169270307/ko/%EC%82%AC%EC%A7%84/%EC%A7%80%EC%9A%B0%ED%8E%80-%EC%98%AC%EB%93%9C-%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8-%EB%89%B4-%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4-%EC%8B%9C.jpg?s=612x612&w=0&k=20&c=7my-heBvlHUT3q-miFzBij6-AAKuz4E-hKy5G4ZNFUo=',
    text: '03지우펀',
    position: { top: '50%', left: '14%' },
    cityData: {
      name: '대만',
      location: 'Jishan Street, Ruifang, New Taipei 22450 Taiwan',
      attraction: '지우펀',
      image: 'https://media.istockphoto.com/id/1169270307/ko/%EC%82%AC%EC%A7%84/%EC%A7%80%EC%9A%B0%ED%8E%80-%EC%98%AC%EB%93%9C-%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8-%EB%89%B4-%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4-%EC%8B%9C.jpg?s=612x612&w=0&k=20&c=7my-heBvlHUT3q-miFzBij6-AAKuz4E-hKy5G4ZNFUo='
    }
  },
  {
    id: 4,
    image: 'https://www.windsortour.co.kr/images/area_img/IT/CIV/ITCIV3201558_0008.jpg?CMD=resize&width=100%',
    text: '04치비타 디 바뇨레조',
    position: { top: '40%', left: '75%' },
    cityData: {
      name: '이탈리아',
      location: 'Piazza S. Donato, 01022 Civita di Bagnoregio',
      attraction: '치비타 디 바뇨레조',
      image: 'https://www.windsortour.co.kr/images/area_img/IT/CIV/ITCIV3201558_0008.jpg?CMD=resize&width=100%'
    }
  },
  {
    id: 5,
    image: 'https://usacartrip.com/xe/files/attach/images/54/079/822/001/602709ff45b2aef746a0b42793bf2c26.jpg',
    text: '05그랜드캐니언',
    position: { top: '72%', left: '55%' },
    cityData: {
      name: '그랜드캐니언',
      location: '대한민국 전라남도',
      attraction: '여수밤바다',
      image: 'https://usacartrip.com/xe/files/attach/images/54/079/822/001/602709ff45b2aef746a0b42793bf2c26.jpg'
    }
  },
  {
    id: 6,
    image: 'https://t1.daumcdn.net/cfile/tistory/247A1E3A546DE58102',
    text: '06치앙마이',
    position: { top: '85%', left: '70%' },
    cityData: {
      name: '태국',
      location: 'Suthep, Mueang Chiang Mai District, Chiang Mai 50200, Thailand',
      attraction: '도이수텝 사원',
      image: 'https://t1.daumcdn.net/cfile/tistory/247A1E3A546DE58102'
    }
  }
];

const OneMoment = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="one-moment-wrapper">
      <div className="h1-wrapper">
        <h1 className="one-moment-title">한장여행</h1>
      </div>

      {moments.map(moment => (
        <div
          key={moment.id}
          className="img-wrapper moment-card fade-in"
          style={moment.position}
          onClick={() => setSelectedCity(moment.cityData)}
        >
          <img src={moment.image} alt={moment.text} />
          <p>{moment.text}</p> {/* 간단히 도시 이름만 */}
        </div>
      ))}

      {selectedCity && (
        <Modal
          cityData={selectedCity}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
};

export default OneMoment;
