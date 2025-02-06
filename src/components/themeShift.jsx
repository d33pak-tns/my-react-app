import React, { Component } from "react";

class ToggleTheme extends Component {
  state = { isDark: false };

  handleThemeChange = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className="flex flex-row justify-evenly items-center">
        <button
          onClick={this.handleThemeChange}
          className="border-md rounded-md text-white bg-blue-500 p-3"
        >
          Toggle-Theme
        </button>
        <div
          className={
            this.state.isDark
              ? `border-blue-300 w-[600px] h-14 border-sm rounded-md bg-slate-400`
              : `border-blue-300 w-[600px] h-14 border-sm rounded-md bg-black`
          }
        ></div>
      </div>
    );
  }
}

export default ToggleTheme;
