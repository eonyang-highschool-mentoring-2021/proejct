import { Button, Checkbox, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';

/**
 * (void) => JSX.Element
 * 함수란? 입력값을 받아서, 어떠한 처리를 한 뒤, 적절한 출력값을 내뱉는 로직
 * @returns JSX.Element
 */
function App():JSX.Element {
  /* state, props, hook */

  /**
   * @name state란?
   * 상태 == 데이터 이다.
   * 데이터는 화면의 레이아웃 혹은 태그 안에 들어가는 값, 변수이다.
   */
  const var1 = 50;

  /* [변수, 변수를 바꿀수 있는 함수] = React.useState(초기값); */
  const [var2, setVar2] = React.useState<number>(30);
  const [var3, setVar3] = React.useState<number>(100);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: 'tomato',
      flexDirection: 'row'
    }}>
      {/* 번호 자리 */}
      <Typography variant="h1">
        {/* var2 출력 하는 곳 */}
        {var2}
      </Typography>

      <Typography variant="h1">
        {/* va3 출력 하는 곳 */}
        {var3}
      </Typography>

      <Button 
        variant="contained"
        onClick={() => {
          const newTemp = var2 + 1;
          setVar2(newTemp);
        }}
      >add</Button>

      <Button 
        variant="contained"
        onClick={() => {
          const newTemp = var2 - 1;
          setVar2(newTemp);
        }}
      >minus</Button>
    </div>
  );
}

export default App;
