import React, { Component, Fragment } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Icon,
  Modal
} from "antd";

const confirm = Modal.confirm;
const { Option } = Select;

function showConfirm() {
  confirm({
    title: "Do you Want to delete these items?",
    content: "Some descriptions",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}

function showDeleteConfirm() {
  confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}

function showPropsConfirm() {
  confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    okButtonProps: {
      disabled: true
    },
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}

export class AntDrawer extends Component {
  state = {
    visible: false,
    visibleAccount: false,
    childrenDrawer: false,
    loading: false,
    visibleModal: false
  };

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visibleModal: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visibleModal: false });
  };

  showDrawerAccount = () => {
    this.setState({
      visibleAccount: true
    });
  };

  onCloseAccount = () => {
    this.setState({
      visibleAccount: false
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { visibleModal, loading } = this.state;
    return (
      <Fragment>
        <div>
          <Button
            type="primary"
            onClick={this.showDrawerAccount}
            style={{
              margin: "10px 16px"
            }}
          >
            <Icon type="plus" /> New account
          </Button>
          <Button
            type="primary"
            onClick={this.showDrawer}
            style={{
              margin: "10px 16px"
            }}
          >
            Open drawer
          </Button>
        </div>
        <div>
          <Drawer
            title="Create a new account"
            width={720}
            onClose={this.onCloseAccount}
            visible={this.state.visibleAccount}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Name">
                    {getFieldDecorator("name", {
                      rules: [
                        { required: true, message: "Please enter user name" }
                      ]
                    })(<Input placeholder="Please enter user name" />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Url">
                    {getFieldDecorator("url", {
                      rules: [{ required: true, message: "Please enter url" }]
                    })(
                      <Input
                        style={{ width: "100%" }}
                        addonBefore="http://"
                        addonAfter=".com"
                        placeholder="Please enter url"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Owner">
                    {getFieldDecorator("owner", {
                      rules: [
                        { required: true, message: "Please select an owner" }
                      ]
                    })(
                      <Select placeholder="Please select an owner">
                        <Option value="xiao">Xiaoxiao Fu</Option>
                        <Option value="mao">Maomao Zhou</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Type">
                    {getFieldDecorator("type", {
                      rules: [
                        { required: true, message: "Please choose the type" }
                      ]
                    })(
                      <Select placeholder="Please choose the type">
                        <Option value="private">Private</Option>
                        <Option value="public">Public</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Approver">
                    {getFieldDecorator("approver", {
                      rules: [
                        {
                          required: true,
                          message: "Please choose the approver"
                        }
                      ]
                    })(
                      <Select placeholder="Please choose the approver">
                        <Option value="jack">Jack Ma</Option>
                        <Option value="tom">Tom Liu</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="DateTime">
                    {getFieldDecorator("dateTime", {
                      rules: [
                        {
                          required: true,
                          message: "Please choose the dateTime"
                        }
                      ]
                    })(
                      <DatePicker.RangePicker
                        style={{ width: "100%" }}
                        getPopupContainer={trigger => trigger.parentNode}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item label="Description">
                    {getFieldDecorator("description", {
                      rules: [
                        {
                          required: true,
                          message: "please enter url description"
                        }
                      ]
                    })(
                      <Input.TextArea
                        rows={4}
                        placeholder="please enter url description"
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e9e9e9",
                padding: "10px 16px",
                background: "#fff",
                textAlign: "right"
              }}
            >
              <Button onClick={this.onCloseAccount} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onCloseAccount} type="primary">
                Submit
              </Button>
            </div>
          </Drawer>
        </div>

        <div>
          <Drawer
            title="Multi-level drawer"
            width={520}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Button type="primary" onClick={this.showChildrenDrawer}>
              Two-level drawer
            </Button>
            <Drawer
              title="Two-level Drawer"
              width={320}
              closable={false}
              onClose={this.onChildrenDrawerClose}
              visible={this.state.childrenDrawer}
            >
              This is two-level drawer
            </Drawer>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e8e8e8",
                padding: "10px 16px",
                textAlign: "right",
                left: 0,
                background: "#fff",
                borderRadius: "0 0 4px 4px"
              }}
            >
              <Button
                style={{
                  marginRight: 8
                }}
                onClick={this.onClose}
              >
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          </Drawer>
        </div>

        <div>
          <Button
            onClick={showConfirm}
            style={{
              margin: "10px 16px"
            }}
          >
            Confirm
          </Button>
          <Button
            onClick={showDeleteConfirm}
            type="dashed"
            style={{
              margin: "10px 16px"
            }}
          >
            Delete
          </Button>
          <Button
            onClick={showPropsConfirm}
            type="dashed"
            style={{
              margin: "10px 16px"
            }}
          >
            With extra props
          </Button>
        </div>

        <div>
          <Button
            type="primary"
            onClick={this.showModal}
            style={{
              margin: "10px 16px"
            }}
          >
            Open Modal with customized footer
          </Button>
          <Modal
            visible={visibleModal}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk}
              >
                Submit
              </Button>
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

export default Form.create()(AntDrawer);
