# CustomOverlay 컴포넌트
+ Props:
  + map: 오버레이가 표시될 지도 객체.
  + position: 오버레이의 위치.
  + content: 오버레이에 표시될 내용.
  + onClose: 오버레이가 닫힐 때 호출될 콜백 함수.
  + id: 오버레이의 고유 ID.
+ useEffect: 오버레이가 생성될 때 kakao.maps.CustomOverlay 객체를 생성하고, 컴포넌트가 언마운트될 때 오버레이를 제거합니다. 닫기 버튼에 onClick 이벤트를 추가하여 오버레이를 닫을 때 부모 컴포넌트의 onClose 콜백을 호출합니다.
# KakaoMap 컴포넌트
+ 상태 관리:
  + map: 지도를 관리하는 상태.
  + overlays: 현재 표시된 모든 오버레이를 관리하는 상태.
  + penOverlay: 새로운 오버레이를 추가하는 함수입니다. 새로운 오버레이를 overlays 상태에 추가합니다.
  + closeOverlay: 특정 오버레이를 닫는 함수입니다. 해당 ID의 오버레이를 overlays 상태에서 제거합니다.
  + 렌더링: overlays 배열을 순회하며 각 오버레이에 대해 CustomOverlay 컴포넌트를 렌더링합니다.
