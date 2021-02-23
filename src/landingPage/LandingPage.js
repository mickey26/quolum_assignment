import React, { useState } from "react";
import "./LandingPage.css";
import { connect } from "react-redux";
import {
  LandingAction,
  expressionAction,
  calculationAction,
  clearFunction,
  scientificButtonAction,
} from "../actions/LandingActions";

const LandingPage = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  const [tempArr, setTempArr] = useState([]);
  const numb = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "clear", 0, "=", "/"];
  const specialButtons = [null, "Sign", "Square", "SQR Root"];
  const showsplbutton = (data) => {
    props.LandingAction(data);
  };
  const clrExp = (data) => {
    props.clearFunction(props.evalExpression);
  };

  const evalExp = (data) => {
    if (!(props.evalExpression.length === 0 && typeof data !== "number")) {
      if (
        !(
          typeof props.evalExpression[props.evalExpression.length - 1] !==
            "number" &&
          typeof data ===
            typeof props.evalExpression[props.evalExpression.length - 1]
        )
      ) {
        if (data !== "=") {
          if (tempArr.length === 0) {
            tempArr.push(data);
            props.expressionAction(tempArr, props.evalExpression, data);
          } else {
            let x = props.evalExpression;
            x.push(data);
            props.expressionAction(x, props.evalExpression, data);
          }
        } else if (data !== "clear") {
          props.calculationAction(props.evalExpression);
        }
      }
    }
  };
  const sciButHandle = (data) => {
    if (props.evalExpression.length > 0)
      props.scientificButtonAction(props.evalExpression, data);
  };
  const modeHandle = (temp) => {
    setDarkMode(!temp);
  };
  return (
    <div className={darkMode ? "box " : "boxDark"}>
      <div className={darkMode ? " navBarBox" : "navBarBoxDark"}>
        <div
          onClick={() => showsplbutton(props.splBut)}
          className={darkMode ? " buttonContainer1" : "buttonContainer2"}
        >
          Scientific Mode
        </div>

        <div className='buttonContainer'>
          {darkMode ? (
            <div
              className={darkMode ? " buttonContainer1" : "buttonContainer2"}
              onClick={() => modeHandle(darkMode)}
            >
              Dark Theme
            </div>
          ) : (
            <div
              className={darkMode ? "buttonContainer1" : "buttonContainer2"}
              onClick={() => modeHandle(darkMode)}
            >
              Light Theme
            </div>
          )}
        </div>
      </div>

      <div className='resultBox'>
        {props.initialize
          ? 0
          : props.evalExpression &&
            props.evalExpression.map((data, index) => (
              <div key='index'>{data}</div>
            ))}
      </div>
      <div className={darkMode ? "gridContainer " : "gridContainerDark"}>
        {props.splBut
          ? specialButtons &&
            specialButtons.map((data, index) => (
              <div
                className={darkMode ? "gridItems " : "gridItemsDark"}
                key='index'
                onClick={() => sciButHandle(data)}
              >
                {data}
              </div>
            ))
          : null}
        {numb &&
          numb.map((data, index) => (
            <div
              className={darkMode ? "gridItems " : "gridItemsDark"}
              onClick={
                data !== "clear" ? () => evalExp(data) : () => clrExp(data)
              }
              key='index'
            >
              {" "}
              {data}
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ LandingReducers }) => {
  const { splBut, evalExpression, initialize } = LandingReducers;
  return {
    splBut,
    evalExpression,
    initialize,
  };
};

export default connect(mapStateToProps, {
  LandingAction,
  expressionAction,
  calculationAction,
  clearFunction,
  scientificButtonAction,
})(LandingPage);
