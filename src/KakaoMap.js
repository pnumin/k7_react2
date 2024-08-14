import React, { useState, useEffect } from 'react';
import CustomOverlay from './CustomOverlay';

const KakaoMap = () => {
  const [map, setMap] = useState(null);
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const mapInstance = new window.kakao.maps.Map(mapContainer, mapOption);
    setMap(mapInstance);
  }, []);

  const openOverlay = () => {
    const id = overlays.length + 1;
    const position = new window.kakao.maps.LatLng(
      33.450701 + Math.random() * 0.01,
      126.570667 + Math.random() * 0.01
    );

    const newOverlay = {
      id,
      position,
      content: `여기에 내용을 추가할 수 있습니다.`,
    };

    setOverlays((prevOverlays) => [...prevOverlays, newOverlay]);
  };

  const closeOverlay = (id) => {
    setOverlays((prevOverlays) => prevOverlays.filter((ov) => ov.id !== id));
  };

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
      <button onClick={openOverlay}>오버레이 열기</button>

      {overlays.map((overlay) => (
        <CustomOverlay
          key={overlay.id}
          map={map}
          position={overlay.position}
          content={overlay.content}
          onClose={closeOverlay}
          id={overlay.id}
        />
      ))}
    </div>
  );
};

export default KakaoMap;
