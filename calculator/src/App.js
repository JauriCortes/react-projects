import "./styles.css"
import React from "react";

function App() {

  const [state, setState] = React.useState({
    SecondOperator: false,
    previous: "",
    current: "",
  })
  
  function clickHandler(message) {

    switch(message) {
      case "=":
        equal();
        break;
      case "AC":
        AC();
        break;
      case "DEL":
        DEL();
        break;
      default:
        writeOnScreen(message)
        break;
    }
  }

  function DEL() {
    var old = state.current;
    var n = old.substring(0, old.length-1)
    setState({
      ...state,
      current: n
    })
  }

  function AC() {
    setState({
      SecondOperator: false,
      previous: "",
      current: ""
    })
  }

  function equal(op = "") {
    let result = (eval(state.current)).toString()
    setState({
      ...state,
      SecondOperator: false,
      previous: state.current,
      current: result,
    })
  }

  function writeOnScreen(message) {
    if(!parseInt(message) && message!==".") {
      if(state.SecondOperator) {
        let result = eval(state.current)
        setState({
          ...state,
          previous: state.current,
          current: result+message,
        })
      }
      else {
        setState({
          ...state,
          current: state.current + message,
          SecondOperator: true
        })
      }
    }
    if(parseInt(message) || message===".") {
      setState({
        ...state,
        current: state.current+message
      })
    }
  }

  function CalculatorButton(props) {
    let value = props.value
    return <button onClick={() => clickHandler(value)}>{value}</button>
  }
  function BigCalculatorButton(props) {
    let value = props.value
    return <button className="span-two" onClick={() => clickHandler(value)}>{value}</button>
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{state.previous}</div>
        <div className="current-operand">{state.current}</div>
      </div>
      <BigCalculatorButton value="AC"/>
      <CalculatorButton value="DEL"/>
      <CalculatorButton value="/"/>
      <CalculatorButton value="1"/>
      <CalculatorButton value="2"/>
      <CalculatorButton value="3"/>
      <CalculatorButton value="*"/>
      <CalculatorButton value="4"/>
      <CalculatorButton value="5"/>
      <CalculatorButton value="6"/>
      <CalculatorButton value="+"/>
      <CalculatorButton value="7"/>
      <CalculatorButton value="8"/>
      <CalculatorButton value="9"/>
      <CalculatorButton value="-"/>
      <CalculatorButton value="."/>
      <CalculatorButton value="0"/>
      <BigCalculatorButton value="="/>
    </div>
  )
}

export default App