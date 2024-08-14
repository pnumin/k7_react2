import React, { useEffect } from 'react';

const CustomOverlay = ({ map, position, content, onClose, id }) => {
  useEffect(() => {
    const overlayContent = document.createElement('div');
    overlayContent.innerHTML = `
      <div class="overlay">
        <a href="#" class="close" title="닫기" data-id="${id}">X</a>
        <div>
          <h4>커스텀 오버레이 ${id}</h4>
          <p>${content}</p>
        </div>
      </div>`;

    const overlayInstance = new window.kakao.maps.CustomOverlay({
      content: overlayContent,
      position: position,
      map: map,
    });

    // 닫기 버튼에 이벤트 추가
    const closeBtn = overlayContent.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      overlayInstance.setMap(null); // 오버레이 제거
      onClose(id); // 부모 컴포넌트로 오버레이 닫기 이벤트 전달
    });

    return () => {
      overlayInstance.setMap(null);
    };
  }, [map, position, content, onClose, id]);

  return null;
};

export default CustomOverlay;
