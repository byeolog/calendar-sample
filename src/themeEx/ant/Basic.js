import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Typography,
  Checkbox,
  TreeSelect,
  Divider,
  Radio,
  Input,
  Icon,
  Popconfirm,
  message,
  Popover,
  Badge,
  Switch
} from "antd";

const { Title } = Typography;
const CheckboxGroup = Checkbox.Group;

const ButtonGroup = Button.Group;

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "0-0-0",
        key: "0-0-0"
      }
    ]
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "Child Node3",
        value: "0-1-0",
        key: "0-1-0"
      },
      {
        title: "Child Node4",
        value: "0-1-1",
        key: "0-1-1"
      },
      {
        title: "Child Node5",
        value: "0-1-2",
        key: "0-1-2"
      }
    ]
  }
];

const popoverContent = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default class Basic extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    value: ["0-0-0"],
    valueRadio: 1,

    countBadge: 5,
    showBadge: true
  };
  increaseBadge = () => {
    const countBadge = this.state.countBadge + 1;
    this.setState({ countBadge });
  };

  declineBadge = () => {
    let countBadge = this.state.countBadge - 1;
    if (countBadge < 0) {
      countBadge = 0;
    }
    this.setState({ countBadge });
  };

  onChangeBadge = showBadge => {
    this.setState({ showBadge });
  };

  onChangeRadio = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      valueRadio: e.target.value
    });
  };

  onChangeTreeSelect = value => {
    console.log("onChange ", value);
    this.setState({ value });
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };

  confirm = e => {
    console.log(e);
    message.success("Click on Yes");
  };

  cancel = e => {
    console.log(e);
    message.error("Click on No");
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChangeTreeSelect,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: "Please select",
      style: {
        width: 300
      }
    };

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Title level={3}>Button</Title>
            <div>
              <Button type="primary" className="antdButton">
                Primary
              </Button>
              <Button className="antdButton">Default</Button>
              <Button type="dashed" className="antdButton">
                Dashed
              </Button>
              <Button type="danger" className="antdButton">
                Danger
              </Button>
            </div>
            <div>
              <Button
                type="primary"
                shape="circle"
                icon="search"
                className="antdButton"
              />
              <Button type="primary" icon="search" className="antdButton">
                Search
              </Button>
              <Button shape="circle" icon="search" className="antdButton" />
              <Button icon="search" className="antdButton">
                Search
              </Button>
              <br />
              <Button shape="circle" icon="search" className="antdButton" />
              <Button icon="search" className="antdButton">
                Search
              </Button>
              <Button
                type="dashed"
                shape="circle"
                icon="search"
                className="antdButton"
              />
              <Button type="dashed" icon="search" className="antdButton">
                Search
              </Button>
            </div>
            <div>
              <Button
                type="primary"
                shape="circle"
                icon="download"
                className="antdButton"
              />
              <Button
                type="primary"
                shape="round"
                icon="download"
                className="antdButton"
              >
                Download
              </Button>
              <Button
                type="primary"
                icon="download"
                size="large"
                className="antdButton"
              >
                Download
              </Button>
            </div>

            <Divider orientation="right">Right Text</Divider>
            <Title level={3}>Icon</Title>
            <div>
              <Icon
                type="car"
                theme="filled"
                style={{ fontSize: "28px", margin: "5px" }}
              />
              <Icon
                type="camera"
                theme="filled"
                style={{ fontSize: "28px", color: "#08c", margin: "5px" }}
              />
              <Icon
                type="home"
                theme="filled"
                style={{ fontSize: "28px", margin: "5px" }}
              />
              <Icon
                type="unlock"
                theme="filled"
                style={{ fontSize: "28px", margin: "5px" }}
              />
              <Icon
                type="ie-circle"
                theme="filled"
                style={{ fontSize: "28px", color: "#08c", margin: "5px" }}
              />
              <Icon
                type="delete"
                theme="filled"
                style={{ fontSize: "28px", color: "#ff0000", margin: "5px" }}
              />
              <Icon
                type="delete"
                style={{ fontSize: "28px", color: "#08c", margin: "5px" }}
              />
              <Icon type="phone" style={{ fontSize: "28px", margin: "5px" }} />
            </div>

            <Divider orientation="right">Right Text</Divider>
            <Title level={3}>Popconfirm</Title>
            <div>
              <Popconfirm
                placement="topLeft"
                title="Are you sure delete this task?"
                onConfirm={this.confirm}
                onCancel={this.cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button>DELETE</Button>
              </Popconfirm>
            </div>

            <Divider orientation="right">Right Text</Divider>
            <Title level={3}>Popover</Title>
            <div>
              <Popover
                content={popoverContent}
                title="Title"
                placement="topLeft"
              >
                <Button type="primary">Hover me</Button>
              </Popover>
            </div>
          </Col>
          <Col span={12}>
            <Title level={3}>Checkbox</Title>
            <div>
              <div style={{ borderBottom: "1px solid #E9E9E9" }}>
                <Checkbox
                  indeterminate={this.state.indeterminate}
                  onChange={this.onCheckAllChange}
                  checked={this.state.checkAll}
                >
                  Check all
                </Checkbox>
              </div>
              <br />
              <CheckboxGroup
                options={plainOptions}
                value={this.state.checkedList}
                onChange={this.onChange}
              />
            </div>

            <Divider orientation="right">Right Text</Divider>
            <Title level={3}>Radio</Title>
            <div>
              <div>
                <Radio.Group
                  onChange={this.onChangeRadio}
                  value={this.state.valueRadio}
                >
                  <Radio style={radioStyle} value={1}>
                    Option A
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Option B
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Option C
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    More...
                    {this.state.valueRadio === 4 ? (
                      <Input style={{ width: 100, marginLeft: 10 }} />
                    ) : null}
                  </Radio>
                </Radio.Group>
              </div>
              <div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="a">Hangzhou</Radio.Button>
                  <Radio.Button value="b">Shanghai</Radio.Button>
                  <Radio.Button value="c">Beijing</Radio.Button>
                  <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group>
              </div>
            </div>

            <Divider orientation="right">Right Text</Divider>
            <Title level={3}>TreeSelect</Title>
            <div>
              <TreeSelect {...tProps} />
            </div>

            <Divider orientation="right">Right Text</Divider>
            <Title level={3}>Badge</Title>
            <div>
              <div>
                <div>
                  <Badge count={this.state.countBadge}>
                    <a href="#" className="head-example" />
                  </Badge>
                  <ButtonGroup style={{ marginLeft: 10 }}>
                    <Button onClick={this.declineBadge}>
                      <Icon type="minus" />
                    </Button>
                    <Button onClick={this.increaseBadge}>
                      <Icon type="plus" />
                    </Button>
                  </ButtonGroup>
                </div>
                <div style={{ marginTop: 30 }}>
                  <Badge dot={this.state.showBadge}>
                    <a href="#" className="head-example" />
                  </Badge>
                  <Switch
                    style={{ marginLeft: 30 }}
                    onChange={this.onChangeBadge}
                    checked={this.state.showBadge}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
