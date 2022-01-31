import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const Game=()=>{
  return<div class="container">
    Tic-Tac-Toe
    <Board/>
  </div>
}
let flag=false;
let winner=false
const Board=()=>{
  const aboard=Array(9).fill(null);
  const [arr,setArr]=React.useState(aboard);
  const [text,setText]=React.useState("X");
  const [winn,setWinn]=React.useState();
  const func=(i)=>{
    const newArray=[...arr];
    let text;
    if(!win(arr)){
    if(newArray[i]==null){
    if(!flag){
    newArray[i]='X';
    text="O";
    
    }
    else {
      newArray[i]='O';
      text="X";
    }
    winner=win(newArray)
    flag=!flag;
    setArr(newArray);setText(text);
    }
  }
  if(winner){
    if(!flag){
      setWinn("O is the winner :)")
    }
    else{
      setWinn("X is the winner :)")
    }
  }
  }
  const win=(arr)=>{
    const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for (let x of lines){
      if(arr[x[0]]!=null){
        if(arr[x[0]]==arr[x[1]]&&arr[x[1]]==arr[x[2]]){
          return true;
        }
      }
    }
  }
  const renderSquare=(i)=>{
    return <Square value={arr[i]} onClick={()=>func(i)}/>
  }
  return<div class="wrapper">
    <p class="text">It is {text}'s turn</p>
    <p class="text">{winn}</p>
    <div class="boardrow">
   {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
   </div>
   <div class="boardrow">
  {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
  </div>
  <div class="boardrow">
   {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
   </div>
  </div>
}

const Square=(props)=>{
  

  return <div class="square" onClick={props.onClick}>
    {props.value}
  </div>
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
