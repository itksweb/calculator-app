import { useState } from "react";

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

  let wrapper = {
    backgroundColor: "hsl(222, 26%, 31%)",
    color: "white",
  };
  let themeSwitcher = {
    backgroundColor: "hsl(223, 31%, 20%)",
    justifyContent: "flex-start",
  };
  let themeSwitcherInner = {
    backgroundColor: "hsl(6, 63%, 50%)",
  };
  let calcDisplay = {
    color: "white",
    backgroundColor: "hsl(224, 36%, 15%)",
  };
  let keypad = {
    backgroundColor: "hsl(223, 31%, 20%)",
  };
  let inputBtn = {
    backgroundColor: "#eae3da",
    color: "hsl(221, 14%, 31%)",
    boxShadow: "0 4px #b1a399",
  };
  let colvar = {
    color: "white",
    backgroundColor: "hsl(225, 21%, 49%)",
    boxShadow: "0 4px hsl(224, 28%, 35%)",
  };
  let equal = {
    color: "white",
    backgroundColor: "hsl(6, 63%, 50%)",
    boxShadow: "0 4px hsl(6, 70%, 34%)",
  };
  if (theme === 2) {
    wrapper = {
      backgroundColor: "hsl(0, 0%, 90%)",
      color: "hsl(60, 10%, 19%)",
    };
    themeSwitcher = {
      backgroundColor: "hsl(0, 5%, 81%)",
      justifyContent: "center",
    };
    themeSwitcherInner = {
      backgroundColor: "hsl(25, 98%, 40%)",
    };
    calcDisplay = {
      backgroundColor: "hsl(0, 0%, 93%)",
    };
    keypad = {
      backgroundColor: "hsl(0, 5%, 81%)",
    };
    inputBtn = {
      color: "hsl(221, 14%, 31%)",
      backgroundColor: "hsl(45, 7%, 89%)",
      boxShadow: "0 4px hsl(35, 11%, 61%)",
    };
    colvar = {
      backgroundColor: "hsl(185, 42%, 37%)",
      color: "white",
      boxShadow: "0 4px hsl(185, 58%, 25%)",
    };
    equal = {
      color: "white",
      backgroundColor: "hsl(25, 98%, 40%)",
      boxShadow: "0 4px hsl(25, 99%, 27%)",
    };
  }
  if (theme === 3) {
    wrapper = {
      backgroundColor: "hsl(268, 75%, 9%)",
      color: "hsl(52, 100%, 62%)",
    };
    themeSwitcher = {
      backgroundColor: "hsl(268, 71%, 12%)",
      justifyContent: "flex-end",
    };
    themeSwitcherInner = {
      backgroundColor: "hsl(176, 100%, 44%)",
    };
    calcDisplay = {
      backgroundColor: "hsl(268, 71%, 12%)",
    };
    keypad = {
      backgroundColor: "hsl(268, 71%, 12%)",
    };
    inputBtn = {
      color: "hsl(52, 100%, 62%)",
      backgroundColor: "hsl(281, 89%, 26%)",
      boxShadow: "0 3px hsl(285, 91%, 52%)",
    };
    colvar = {
      backgroundColor: "hsl(281, 89%, 26%)",
      color: "white",
      boxShadow: "0 3px hsl(285, 91%, 52%)",
    };
    equal = {
      color: "hsl(268, 47%, 21%)",
      backgroundColor: "hsl(176, 100%, 44%)",
      boxShadow: "0 3px hsl(177, 92%, 70%)",
    };
  }

  return (
    <div className="wrapper" style={wrapper}>
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
              <div
                className="theme-switcher"
                style={themeSwitcher}
                onClick={switchTheme}
              >
                <span
                  className="theme-switcher-inner"
                  style={themeSwitcherInner}
                ></span>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="display" value={display} style={calcDisplay}>
            {display}
          </div>
          <div className="buttons" style={keypad}>
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="7"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="8"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="9"
            />
            <input
              type="button"
              style={colvar}
              onClick={dDisplay}
              className="colvar"
              value="del"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="4"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="5"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="6"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="+"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="1"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="2"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="3"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="-"
            />
            <input
              type="button"
              onClick={handleDot}
              style={inputBtn}
              id=""
              value="."
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="0"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="/"
            />
            <input
              type="button"
              onClick={uDisplay}
              style={inputBtn}
              id=""
              value="*"
            />
            <input
              type="button"
              onClick={rDisplay}
              className="colvar"
              style={colvar}
              value="reset"
              id="reset"
            />
            <input
              type="button"
              onClick={solve}
              style={equal}
              id="equal"
              value="="
            />
          </div>
        </main>
      </span>
    </div>
  );
};

export default Calc;
