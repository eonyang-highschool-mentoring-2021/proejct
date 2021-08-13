import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * @name index.tsx
 * HTML 문서 - 전체 개발한 웹 페이지가 HTML 도큐먼트(문서) 형태로 저장된다.
 * 해당 HTML 문서를 웹 (인터넷) 상에서 보여주는 역할을 한다.
 */
ReactDOM.render(
  <React.StrictMode>
    {/**
     * 입력값 : void
     * 출력값 : 웹 상에서 보여지는 요소를 반환.
     */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
