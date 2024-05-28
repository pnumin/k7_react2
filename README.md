# React Project 생성
1. Node.js 설치 : https://nodejs.org/
2. npx create-react-app my-app 

# tailwind css 설치
1. npm install -D tailwindcss
2. Tailwind CSS 설정 파일 생성 : npx tailwindcss init
3. tailwind.config.js 파일 수정
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
# React Icon
- npm install react-icons --save

# React Route
- npm install react-router-dom

# Recoil 설치
- npm install recoil

# 환경변수 설정
1. .env 만들기
   - .env 파일은 최상위 루트에 작성
   - 환경변수명은 반드시 REACT_APP_으로 시작
2. .env 파일 gitIgnore에 .env를 추가

# RESTful 테스팅
1. 설치 npm install -g json-server
2. 실행npx json-server --watch db.json --port 3005 


# VS code Extention
- VS Code ES7 React/Redux/React-Native/JS snippets
- Tailwind CSS IntelliSense