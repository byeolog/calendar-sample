import React, { Component } from "react";
import BigCalendarDnD from "./calendar/bigCalendar/BigCalendarDnD";
import BigCalendarDnDResource from "./calendar/bigCalendar/BigCalendarDnDResource";
import BigCalendar from "./calendar/bigCalendar/BigCalendar";
import FullCalendar from "./calendar/fullCalendar/FullCalendar";
import ToastCalendar from "./calendar/toastCalendar/ToastCalendar1";

import BigScheduler from "./calendar/bigScheduler/BigScheduler";
import BigScheduler1 from "./calendar/bigScheduler/BigScheduler2";

import MaterialBasic from "./themeEx/material/Basic";
import MaterialTable from "./themeEx/material/MaterialTable";
import MuiDataTables from "./themeEx/material/MuiDataTables";

import AppBarCustom from "./themeEx/material/AppBarCustom";

import ToastGrid from "./grid/toastGrid/ToastTable";
import "./App.css";

export class App extends Component {
  state = {
    calendar: ""
  };

  _changeCalendar = pram => {
    this.setState({
      calendar: pram
    });
  };

  _renderCalender = () => {
    let calendar = <BigCalendar />;
    if (this.state.calendar === "BigCalendar") {
      calendar = <BigCalendar />;
    } else if (this.state.calendar === "BigCalendarDnD") {
      calendar = <BigCalendarDnD />;
    } else if (this.state.calendar === "BigCalendarDnDResource") {
      calendar = <BigCalendarDnDResource />;
    } else if (this.state.calendar === "FullCalendar") {
      calendar = <FullCalendar />;
    } else if (this.state.calendar === "ToastCalendar") {
      calendar = <ToastCalendar />;
    } else if (this.state.calendar === "ToastGrid") {
      calendar = <ToastGrid />;
    } else if (this.state.calendar === "BigScheduler") {
      calendar = <BigScheduler />;
    } else if (this.state.calendar === "BigScheduler1") {
      calendar = <BigScheduler1 />;
    } else if (this.state.calendar === "MaterialBasic") {
      calendar = <MaterialBasic />;
    } else if (this.state.calendar === "MaterialTable") {
      calendar = <MaterialTable />;
    } else if (this.state.calendar === "MuiDataTables") {
      calendar = <MuiDataTables />;
    }

    return calendar;
  };

  render() {
    return (
      <div>
        <div className="menuWrapper">
          <AppBarCustom />
          {/* <span
            className="menu"
            onClick={() => this._changeCalendar("BigCalendar")}
          >
            BigCalendarPlain
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("BigCalendarDnD")}
          >
            BigCalendarDnD
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("BigCalendarDnDResource")}
          >
            BigCalendarDnDResource
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("FullCalendar")}
          >
            FullCalendar
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("ToastCalendar")}
          >
            ToastCalendar
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("ToastGrid")}
          >
            ToastGrid
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("BigScheduler")}
          >
            BigScheduler
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("BigScheduler1")}
          >
            BigScheduler1
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("MaterialBasic")}
          >
            MaterialBasic
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("MaterialTable")}
          >
            MaterialTable
          </span>
          <span
            className="menu"
            onClick={() => this._changeCalendar("MuiDataTables")}
          >
            MuiDataTables
          </span> */}
        </div>
        {/* {this._renderCalender()} */}
      </div>
    );
  }
}

export default App;
