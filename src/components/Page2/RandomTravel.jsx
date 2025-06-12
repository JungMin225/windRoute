// RandomTravel.jsx
import React, { useState } from 'react';
import './RandomTravel.css';
import RandomModal from './RandomModal'; 

// 복불복으로 뽑을 여행지 목록
const destinations = [
  {
    name: '제주도',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxOTAxMTVfMzgg/MDAxNTQ3NDgyMTU5OTk5.fMTjO-pNdZeUU_UIeM_nyIccK943lRPojJM2tvjlKWUg.wssp_JJF-SmQmibLKN8UMW5BRZQX3Wxc04KG5RAIg3Ag.PNG.kayom/%EC%95%84%EC%9D%B4%ED%8F%B0%EB%B0%B0%EA%B2%BD,%EC%95%84%EC%9D%B4%ED%8F%B0SE%EB%B0%B0%EA%B2%BD,%EC%95%84%EC%9D%B4%ED%8F%B0%EA%B3%A0%ED%99%94%EC%A7%88,%EC%95%84%EC%9D%B4%ED%8F%B0,%EC%A0%9C%EC%A3%BC%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4005.png?type=w800',
    location: '대한민국 제주도',
    flightTime: '1시간 10분',
    attraction: '성산일출봉, 만장굴',
    description: '맑은 바다와 한라산의 풍경을 동시에!'
  },
  {
    name: '발리',
    image: 'https://images.pexels.com/photos/2100804/pexels-photo-2100804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    location: '인도네시아 발리 주',
    flightTime: '약 7시간 30분',
    attraction: '우붓 왕궁, 꾸따 해변, 따나롯 사원',
    description: '바닷가에서 요가 클래스, 울창한 계단식 논 그리고 선셋까지… 휴양과 액티비티를 한 번에 즐길 수 있어요.'
  },
  {
    name: '교토',
    image: 'https://cdn.shopify.com/s/files/1/0374/9638/9768/files/KyotoGion_Inspirations_05.jpg?v=1733199821',
    location: '일본 교토부 교토시',
    flightTime: '약 1시간 40분 (간사이 공항 경유)',
    attraction: '후시미 이나리 신사, 기온 거리, 아라시야마 대나무 숲',
    description: '고즈넉한 사찰과 전통 찻집 사이를 걷다 보면 마치 시간 여행을 하는 기분이 듭니다.'
  },
  {
    name: '싱가포르',
    image: 'https://s.widget-club.com/images/YyiR86zpwIMIfrCZoSs4ulVD9RF3/e4e8da5234f81c16ff931f6768698a4d/1c43216dde33221bdd4fffe95ae22c36.jpg?q=70&w=500',
    location: '싱가포르 공화국',
    flightTime: '약 6시간 30분',
    attraction: '마리나 베이 샌즈, 가든스 바이 더 베이, 차이나타운',
    description: '도시 전체가 포토존! 화려한 스카이라인과 이국적인 정원, 길거리 음식을 모두 경험해보세요.'
  },
  {
    name: '파리',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMzBfMTQ2/MDAxNjExOTcxODI5MjA1.nJzug6-jcwmQACN1IOfY4H-Kgm_sytNexSLHAJ0RBagg.Lfwf4hMeo5X-HAjB9TTt8Ansg0IN5RxhUgGJyUzeN4Ug.JPEG.0h-yeah/%EC%95%84%EC%9D%B4%ED%8F%B0%EA%B3%A0%ED%99%94%EC%A7%88%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4%ED%8C%8C%EB%A6%AC%EC%97%90%ED%8E%A0%ED%83%91%EA%B0%90%EC%84%B1.jpg?type=w800',
    location: '프랑스 Île-de-France',
    flightTime: '약 12시간',
    attraction: '에펠탑, 루브르 박물관, 몽마르트 언덕',
    description: '세느강을 따라 걷고, 크루아상·에스프레소로 시작하는 하루… 로맨틱 감성으로 가득한 도시입니다.'
  },
  {
    name: '뉴욕',
    image: 'https://i1.korea-iphone.com/files/a09845e078d6509c6ce855b8b98fd4dd.jpg',
    location: '미국 뉴욕주',
    flightTime: '약 14시간',
    attraction: '센트럴파크, 타임스퀘어, 브루클린 브리지',
    description: '24시간 잠들지 않는 도시에서 브로드웨이 공연, 글로벌 스트리트 푸드, 공원 산책까지 다채로운 경험을 해보세요.'
  },
  {
    name: '이스탄불',
    image: 'https://e1.pxfuel.com/desktop-wallpaper/318/922/desktop-wallpaper-turkey-iphone-istanbul-iphone.jpg',
    location: '터키 이스탄불',
    flightTime: '약 11시간 30분',
    attraction: '블루 모스크, 아야 소피아, 그랜드 바자르(대시장)',
    description: '동서양 문화가 만나는 매력의 도시! 모스크 내부 타일 예술과 향신료 가득한 바자르 골목을 탐험해 보세요.'
  },
  {
    name: '밴쿠버',
    image: 'https://media.istockphoto.com/id/615925894/ko/%EC%82%AC%EC%A7%84/%EA%B0%80%EC%9D%84%EB%A7%9E%EC%9D%B4-%EC%83%89%EC%83%81-%ED%8C%8C%ED%81%AC.jpg?s=612x612&w=0&k=20&c=GajLnadljtQiITBT_yndXDmYXQYl91jWCJDXcBsraSo=',
    location: '캐나다 브리티시컬럼비아주 밴쿠버',
    flightTime: '약 10시간',
    attraction: '스탠리 파크(자전거 일주로), 그라우스 마운틴 케이블카, 개스타운 증기시계',
    description: '바다와 산이 맞닿은 도시에서 자전거, 카약, 하이킹까지 액티비티를 속도감 있게 즐길 수 있어요.'
  },
  
];

const RandomTravel = () => {
  const [name, setName] = useState('');
  const [selectedDest, setSelectedDest] = useState(null);

  const handleChange = e => setName(e.target.value);

  const pickRandom = () => {
    const idx = Math.floor(Math.random() * destinations.length);
    const displayName = name.trim() || '여행자';
    setSelectedDest({
      ...destinations[idx],
      displayName
    });
  };

  const handleClick = () => {
    pickRandom();
  };

  const handleRePick = () => {
    pickRandom();
  };

  return (
    <div className="random-travel-wrapper">
      <p className="random-subtitle">
        예상치 못한 장소<br/>
        예상치 못한 경험
      </p>
      <h1 className="random-title">본인만의 특별한 장소를 찾아보세요</h1>

      <input
        type="text"
        className="random-input"
        placeholder="이름을 입력해주세요!"
        value={name}
        onChange={handleChange}
      />

      <button className="random-button" onClick={handleClick}>
        복불복 여행지 뽑기
      </button>

      {selectedDest && (
        <RandomModal
          dest={selectedDest}
          onClose={() => setSelectedDest(null)}
          onRePick={handleRePick}
        />
      )}

      
      <div className="random-banner">
        <img src="/img/img2.png" alt="여름방학 배너" />
      </div>
    </div>
  );
};

export default RandomTravel;