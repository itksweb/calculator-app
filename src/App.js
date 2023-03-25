// import logo from './logo.svg';
import { Fragment, useState } from "react";
import Calc from "./components/Calc";

function App() {
  const [display, setDisplay] = useState("0");

  const updateDisplay = (val) => {
    let beforeOp = /^(0\.|[1-9][0-9]*\.?)(\d*)\.?(\d*)/g;
    let afterOp = /([\+\-\*\/])(0\.|[1-9][0-9]*\.?)?(\d*)(?:\.?(\d*))$/g;
    let op = /[\-\+\*\/]+([\+\*\/])/;
    if (display === "0") {
      setDisplay(val.target.value);
    } else {
      setDisplay((prev) => prev + val.target.value);
    }
    if (beforeOp.test(display)) {
      setDisplay((prev) => prev.replace(beforeOp, "$1$2$3"));
    }
    if (afterOp.test(display)) {
      setDisplay((prev) => prev.replace(afterOp, "$1$2$3$4"));
    }
    if (op.test(display)) {
      setDisplay((prev) => prev.replace(op, "$1"));
    }
  };
  const resetDisplay = () => {
    return setDisplay("0");
  };
  const deleteDisplay = () => {
    if (display.length > 1) {
      setDisplay((prev) => prev.replace(/.$/, ""));
    } else if (display.length === 1) {
      return setDisplay("0");
    }
  };
  const solveIt = () => {
    setDisplay((prev) => eval(prev));
  };
  const manageDot = (val) => {
    if (display === "0") {
      return setDisplay("0.");
    } else if (display[display.length - 1] === ".") {
      return;
    } else {
      setDisplay((prev) => (prev += val.target.value));
    }
  };

  return (
    <Fragment>
      <Calc
        display={display}
        updateDisplay={updateDisplay}
        resetDisplay={resetDisplay}
        deleteDisplay={deleteDisplay}
        solveIt={solveIt}
        manageDot={manageDot}
      />
    </Fragment>
  );
}

export default App;
