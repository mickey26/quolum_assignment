export const LandingAction = (data) => {
  return (dispatch) => {
    dispatch({ type: "change spl button", payload: data });
  };
};

export const scientificButtonAction = (tempArr, button) => {
  return (dispatch) => {
    let p = button.toString();
    let pArray = [];
    let sample = tempArr[0];
    switch (p) {
      case "Sign": {
        pArray.push(-sample);
        break;
      }
      case "Square": {
        pArray.push(sample * sample);
        break;
      }
      case "SQR Root": {
        if (sample >= 0) {
          pArray.push(Math.sqrt(sample));
        }
        break;
      }
      default:
        pArray.push(sample);
    }

    dispatch({ type: "scientific calculation", payload: pArray });
  };
};

export const clearFunction = (arr) => {
  return (dispatch) => {
    arr = [];
    dispatch({ type: "clear all state", payload: arr });
  };
};

export const calculationAction = (finalArray, data) => {
  return (dispatch) => {
    let midResult = 0;
    let sign = finalArray[1];
    switch (sign) {
      case "+": {
        midResult = finalArray[0] + finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      case "-": {
        midResult = finalArray[0] - finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      case "*": {
        midResult = finalArray[0] * finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      case "/": {
        midResult = finalArray[0] / finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      default: {
      }
    }
    dispatch({ type: "calculation action", payload: finalArray });
  };
};

export const expressionAction = (arr, temp, x) => {
  return (dispatch) => {
    let finalArray = [];
    let temp = "";
    let midResult = 0;
    let strnumb = "";
    arr.forEach((data, index) => {
      if (typeof data === "number") {
        var stnum = "";
        stnum = data;
        strnumb = stnum.toString();
        temp = temp.concat(strnumb);
        if (index === arr.length - 1) {
          finalArray.push(parseInt(temp));
        }
        midResult = finalArray[0];
      } else {
        finalArray.push(parseInt(temp));
        //finalArray.push(temp);
        temp = "";
        finalArray.push(data);
        midResult = finalArray[0];
      }
    });
    if (typeof x !== "number") {
      if (finalArray.length > 3) {
        let midResult = finalArray[0];
        let sign = finalArray[1];
        switch (sign) {
          case "+": {
            midResult = finalArray[0] + finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          case "-": {
            midResult = finalArray[0] - finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          case "*": {
            midResult = finalArray[0] * finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          case "/": {
            midResult = finalArray[0] / finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          default: {
          }
        }
      }
    }
    dispatch({
      type: "evaluating Expression",
      payload: { finalArray, midResult },
    });
  };
};
