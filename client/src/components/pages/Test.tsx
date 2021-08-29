import React from 'react';

import { Button, Checkbox, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Children(): JSX.Element {
  const [checked, setChecked] = React.useState(false);
 
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
   
  return ( 
    <FormGroup>
      <FormControlLabel
        control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
        label="Small"
      />
      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label="Normal"
      />
    </FormGroup>
  ); 
} 
    
/**
 * @name 2.컴포넌트_함수가_받을_props들을_객체로_정의한다.
 */
interface Children2Props {
  var2: number;
  var3: number;
 
  setVar2: React.Dispatch<React.SetStateAction<number>>;
  setVar3: React.Dispatch<React.SetStateAction<number>>;
}
 
/**
 * @name 1.컴포넌트_함수를_정의한다.
 * 
 * @name 3.정의한_Props_객체를_타입으로_지정한다.
 */
function Children2(props: Children2Props): JSX.Element {
  /**
   * @name Props란?
   * 부모로 부터 받은 데이터 혹은 데이터를 조작 할 수 있는 함수들의 묶음
   * 
   * 중요한점! Props 로 받아온 값은 내가 state 로 선언하지 않았더라도 state 처럼 동작한다.
   */

  /**
   * @name 4.함수의_인자로_받아온_props_를_내부_컴포넌트_변수화한다.
   */
  // const {var2, var3, setVar2, setVar3} = props;

   /**
   * @name state란?
   * 상태 == 데이터 이다.
   * 데이터는 화면의 레이아웃 혹은 태그 안에 들어가는 값, 변수이다.
   */
    const var1 = 50;

  return(
    <div>
      <Typography variant="h1">
        {/* var2 출력 하는 곳 */}
        {props.var2}
      </Typography>

      <Typography variant="h1">
        {/* va3 출력 하는 곳 */}
        {props.var3}
      </Typography>

      <Button 
        variant="contained"
        onClick={() => {
          const newTemp = props.var2 + 1;
          props.setVar2(newTemp);
        }}
      >
        add
      </Button>

      <Button 
        variant="contained"
        onClick={() => {
          const newTemp = props.var2 - 1;
          props.setVar2(newTemp);
        }}
      >
        minus
      </Button>
    </div>
      
  )
}

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
    // const var1 = 50;

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
      <Children2 var2={var2} setVar2={setVar2} var3={var3} setVar3={setVar3}/>
      <Children2 var2={var2} setVar2={setVar2} var3={var3} setVar3={setVar3}/>
      <Children2 var2={var2} setVar2={setVar2} var3={var3} setVar3={setVar3}/>
      {/* <Children/> */}
    </div>
  );
}

export default App;
