import React, { Component } from "react";

import AddResourceForm from "./AddResourceForm";

//1. import
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT
} from "react-big-scheduler";
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here
import "react-big-scheduler/lib/css/style.css";

import moment from "moment";

import withDragDropContext from "./withDnDContext";

//2. create the view model, put it in the props obj
let schedulerData = new SchedulerData(
  new moment().format(DATE_FORMAT),
  ViewTypes.Week
);
//set locale moment to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).
//moment.locale("ko-kr");
schedulerData.setLocaleMoment(moment);
//set resources here or later
let resources = [
  {
    id: "g0",
    name: "공공사업팀",
    groupOnly: true
  },
  {
    id: "r1",
    name: "이순신 부장",
    parentId: "g0"
  },
  {
    id: "r2",
    name: "세종 대리",
    parentId: "g0"
  },
  {
    id: "r3",
    name: "강감찬 사원",
    parentId: "g0"
  },
  {
    id: "g1",
    name: "아키텍쳐팀",
    groupOnly: true
  },
  {
    id: "r4",
    name: "구구단 과장",
    parentId: "g1"
  }
];
schedulerData.setResources(resources);
//set events here or later,
//the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
let events = [
  {
    id: 1,
    start: "2019-04-18 09:00:00",
    end: "2019-05-21 18:00:00",
    resourceId: "r3",
    title: "A프로젝트"
    //bgColor: "#D9D9D9"
  },
  {
    id: 2,
    start: "2019-05-19 12:30:00",
    end: "2019-12-20 23:30:00",
    resourceId: "r2",
    title: "A프로젝트"
    //resizable: false
  },
  {
    id: 3,
    start: "2019-05-22 09:00:00",
    end: "2019-12-26 18:00:00",
    resourceId: "r3",
    title: "A프로젝트"
    //movable: false
  },
  {
    id: 4,
    start: "2019-05-19 14:30:00",
    end: "2019-12-20 23:30:00",
    resourceId: "r1",
    title: "A프로젝트"
    //startResizable: false
  },
  {
    id: 5,
    start: "2019-05-22",
    end: "2019-05-23",
    resourceId: "r4",
    title: "A프로젝트",
    //rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
    bgColor: "#f759ab"
  },
  {
    id: 6,
    start: "2019-05-23",
    end: "2019-05-24",
    resourceId: "r4",
    title: "A프로젝트",
    //rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
    bgColor: "#f759ab"
  }
];
schedulerData.setEvents(events);

export class BigScheduler extends Component {
  state = {
    viewModel: schedulerData,
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };
  handleCancel = () => {
    this.setState({ modalVisible: false });
  };
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.addResource(values.name);
      form.resetFields();
      this.setState({ modalVisible: false });
    });
  };
  saveFormRef = form => {
    this.form = form;
  };

  prevClick = schedulerData => {
    schedulerData.prev();
    console.log(schedulerData);
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });
  };

  eventClicked = (schedulerData, event) => {
    alert(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      window.confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${
          event.title
        }, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if (
      window.confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach(item => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: "New event you just created",
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: "purple"
      };
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData
      });
    }
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData
    });
  };

  updateEventStart = (schedulerData, event, newStart) => {
    if (
      window.confirm(
        `Do you want to adjust the start of the event? {eventId: ${
          event.id
        }, eventTitle: ${event.title}, newStart: ${newStart}}`
      )
    ) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    if (
      window.confirm(
        `Do you want to adjust the end of the event? {eventId: ${
          event.id
        }, eventTitle: ${event.title}, newEnd: ${newEnd}}`
      )
    ) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData
    });
  };

  addResource = resourceName => {
    let schedulerData = this.state.viewModel;
    let newFreshId = schedulerData.resources.length + 1;
    let newFreshName = resourceName;
    schedulerData.addResource({ id: newFreshId, name: newFreshName });
    this.setState({
      viewModel: schedulerData
    });
  };

  ops1 = (schedulerData, event) => {
    alert(
      `You just executed ops1 to event: {id: ${event.id}, title: ${
        event.title
      }}`
    );
  };

  ops2 = (schedulerData, event) => {
    alert(
      `You just executed ops2 to event: {id: ${event.id}, title: ${
        event.title
      }}`
    );
  };

  render() {
    //const { schedulerData } = this.props;
    const { viewModel } = this.state;

    let leftCustomHeader = (
      <div>
        <span style={{ fontWeight: "bold" }}>
          <span onClick={this.showModal}>Add a resource</span>
        </span>
        <AddResourceForm
          ref={this.saveFormRef}
          visible={this.state.modalVisible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          addResource={this.addResource}
        />
      </div>
    );

    return (
      <Scheduler
        schedulerData={viewModel}
        prevClick={this.prevClick}
        nextClick={this.nextClick}
        onSelectDate={this.onSelectDate}
        onViewChange={this.onViewChange}
        eventItemClick={this.eventClicked}
        moveEvent={this.moveEvent}
        newEvent={this.newEvent}
        toggleExpandFunc={this.toggleExpandFunc}
        updateEventStart={this.updateEventStart}
        updateEventEnd={this.updateEventEnd}
        leftCustomHeader={leftCustomHeader}
        viewEventText="승인"
        viewEvent2Text="반려"
        viewEventClick={this.ops1}
        viewEvent2Click={this.ops2}
      />
    );
  }
}

export default withDragDropContext(BigScheduler);
