import React, { useState } from "react";

const Calc = ({
  display,
  updateDisplay,
  resetDisplay,
  deleteDisplay,
  solveIt,
  manageDot,
}) => {
  const [theme, setTheme] = useState(1);

  const switchTheme = () => {
    if (theme < 3 && theme >= 1) {
      setTheme((prev) => prev + 1);
    } else {
      setTheme(1);
    }
  };
  const uDisplay = (val) => {
    updateDisplay(val);
  };
  const rDisplay = () => {
    resetDisplay();
  };
  const dDisplay = () => {
    deleteDisplay();
  };
  const handleDot = (val) => {
    manageDot(val);
  };
  const solve = () => {
    solveIt();
  };

  return (
    <div className="wrapper" data-theme={theme}>
      <span>
        <header className="">
          <h1>calc</h1>
          <div className="header-right">
            <p>THEME</p>
            <div className="theme-switch">
              <span className="switch-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </span>
              <div className="theme-switcher" onClick={switchTheme}>
                <span className="theme-switcher-inner"></span>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="display" value={display}>
            {display}
          </div>
          <div className="buttons">
            <input type="button" onClick={uDisplay} value="7" />
            <input type="button" onClick={uDisplay} value="8" />
            <input type="button" onClick={uDisplay} value="9" />
            <input
              type="button"
              onClick={dDisplay}
              className="colvar"
              value="del"
            />
            <input type="button" onClick={uDisplay} value="4" />
            <input type="button" onClick={uDisplay} value="5" />
            <input type="button" onClick={uDisplay} value="6" />
            <input type="button" onClick={uDisplay} value="+" />
            <input type="button" onClick={uDisplay} value="1" />
            <input type="button" onClick={uDisplay} value="2" />
            <input type="button" onClick={uDisplay} value="3" />
            <input type="button" onClick={uDisplay} value="-" />
            <input type="button" onClick={handleDot} value="." />
            <input type="button" onClick={uDisplay} value="0" />
            <input type="button" onClick={uDisplay} value="/" />
            <input type="button" onClick={uDisplay} value="*" />
            <input
              type="button"
              onClick={rDisplay}
              className="colvar"
              value="reset"
              id="reset"
            />
            <input type="button" onClick={solve} id="equal" value="=" />
          </div>
        </main>
      </span>
    </div>
  );
};

export default Calc;
