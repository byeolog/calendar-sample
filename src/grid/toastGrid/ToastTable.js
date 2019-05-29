import React, { Component, Fragment } from "react";

import "tui-pagination/dist/tui-pagination.css";
import "tui-grid/dist/tui-grid.css";
import "tui-date-picker/dist/tui-date-picker.css";
import Grid from "@toast-ui/react-grid";

export default class ToastTable extends Component {
  data = [
    {
      id: 1,
      name: "박영수 차장",
      dept: "공공사업팀",
      proejct: "",
      use: "1",
      c3: 10000
    },
    {
      id: 2,
      name: "김지혜 대리",
      dept: "공공사업팀",
      proejct: "",
      use: "1",
      c3: 2200
    },
    {
      id: 3,
      name: "조성현 과장",
      dept: "공공사업팀",
      proejct: "",
      use: "1",
      c3: 100100
    }
  ];

  header = {
    height: 160,
    complexColumns: [
      {
        title: "컬럼 합치기",
        name: "mergeColumn1",
        childNames: ["id", "name"]
      },
      {
        title: "합쳐져라",
        name: "mergeColumn2",
        childNames: ["dept", "project", "use"]
      }
    ]
  };
  columns = [
    {
      name: "id",
      title: "ID",
      editOptions: {
        type: "text",
        useViewMode: true
      },
      sortable: true
    },
    {
      name: "name",
      title: "Name",
      editOptions: {
        type: "text",
        maxLength: 10,
        useViewMode: true
      },
      sortable: true
    },
    {
      name: "dept",
      title: "Dept",
      editOptions: {
        type: "text",
        maxLength: 10,
        useViewMode: false
      },
      sortable: true
    },
    {
      name: "project",
      title: "Project",
      editOptions: {
        type: "text",
        maxLength: 10,
        useViewMode: false
      },
      sortable: true
    },
    {
      name: "use",
      title: "Use",
      editOptions: {
        type: "checkbox",
        listItems: [
          { text: "사용", value: "1" },
          { text: "미사용", value: "2" }
        ],
        useViewMode: true
      }
    },
    {
      title: "DatePicker (Default)",
      name: "c2",
      editOptions: {
        type: "text",
        useViewMode: false
      },
      component: {
        name: "datePicker"
      }
    },
    {
      title: "가격",
      name: "c3",
      editOptions: {
        type: "text",
        useViewMode: true
      }
    },
    {
      title: "Type",
      name: "typeCode",
      onBeforeChange: function(ev) {
        console.log("Before change:" + ev);
      },
      onAfterChange: function(ev) {
        console.log("After change:" + ev);
      },
      editOptions: {
        type: "select",
        listItems: [
          { text: "그렇다", value: "1" },
          { text: "아니다", value: "2" },
          { text: "모른다", value: "3" }
        ],
        useViewMode: true
      }
    }
  ];

  summary = {
    height: 40,
    position: "bottom", // or 'top'
    columnContent: {
      // c3: {
      //   template: function(valueMap) {
      //     return "MAX: " + valueMap.max + "<br>MIN: " + valueMap.min;
      //   }
      // },
      c3: {
        template: function(valueMap) {
          return (
            "TOTAL: " + valueMap.sum + "<br>AVG: " + valueMap.avg.toFixed(2)
          );
        }
      }
    }
  };

  _MyComponent = () => {
    return (
      <Grid
        data={this.data}
        columns={this.columns}
        rowHeight={25}
        bodyHeight={200}
        virtualScrolling={true}
        heightResizable={true}
        rowHeaders={["rowNum", "checkbox"]}
        onClick={this.handleClick}
        pagination={true}
        summary={this.summary}
        header={this.header}
      />
    );
  };

  gridRef = React.createRef();

  handleAppendRow = () => {
    this.gridRef.current.getInstance().appendRow({});
  };

  handleClick = () => {
    console.log("click!!");
  };

  render() {
    return <Fragment>{this._MyComponent()}</Fragment>;
  }
}
