import React, { Component } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import GridOnIcon from "@material-ui/icons/GridOn";

import CssBaseline from "@material-ui/core/CssBaseline";

import BigCalendarDnD from "../../calendar/bigCalendar/BigCalendarDnD";
import BigCalendarDnDResource from "../../calendar/bigCalendar/BigCalendarDnDResource";
import BigCalendar from "../../calendar/bigCalendar/BigCalendar";
import FullCalendar from "../../calendar/fullCalendar/FullCalendar";
import ToastCalendar from "../../calendar/toastCalendar/ToastCalendar1";
import BigScheduler from "../../calendar/bigScheduler/BigScheduler";
import BigScheduler1 from "../../calendar/bigScheduler/BigScheduler2";
import MaterialBasic from "./Basic";
import MaterialTable from "./MaterialTable";
import MuiDataTables from "./MuiDataTables";
import ToastGrid from "../../grid/toastGrid/ToastTable";
import MaterialSignIn from "./MaterialSignIn";
import MaterialCheckout from "./MaterialCheckout";

import AntForm from "../ant/AntForm";
import AntDrawer from "../ant/AntDrawer";
import AntBasic from "../ant/Basic";

const menuListCalendar = [
  {
    id: 0,
    name: "BigCalendar",
    component: <BigCalendar />,
    icon: <CalendarIcon />,
    url: "https://github.com/arecvlohe/react-big-calendar"
  },
  {
    id: 1,
    name: "BigCalendarDnD",
    component: <BigCalendarDnD />,
    icon: <CalendarIcon />,
    url: "https://github.com/arecvlohe/react-big-calendar"
  },
  {
    id: 3,
    name: "FullCalendar",
    component: <FullCalendar />,
    icon: <CalendarIcon />,
    url: "https://fullcalendar.io/docs/react"
  },
  {
    id: 4,
    name: "ToastCalendar",
    component: <ToastCalendar />,
    icon: <CalendarIcon />,
    url: "https://github.com/nhn/toast-ui.react-calendar"
  }
];

const menuListScheduler = [
  {
    id: 2,
    name: "BigCalendarDnDResource",
    component: <BigCalendarDnDResource />,
    icon: <ScheduleIcon />,
    url: "https://github.com/arecvlohe/react-big-calendar"
  },
  {
    id: 6,
    name: "BigScheduler",
    component: <BigScheduler />,
    icon: <ScheduleIcon />,
    url: "https://stephenchou1017.github.io/scheduler/"
  },
  {
    id: 7,
    name: "BigScheduler1",
    component: <BigScheduler1 />,
    icon: <ScheduleIcon />,
    url: "https://stephenchou1017.github.io/scheduler/"
  }
];

const menuListGrid = [
  {
    id: 5,
    name: "ToastGrid",
    component: <ToastGrid />,
    icon: <GridOnIcon />,
    url: "https://github.com/nhn/toast-ui.react-grid"
  },
  {
    id: 9,
    name: "MaterialTable",
    component: <MaterialTable />,
    icon: <GridOnIcon />,
    url: "https://github.com/mbrn/material-table"
  },
  {
    id: 10,
    name: "MuiDataTables",
    component: <MuiDataTables />,
    icon: <GridOnIcon />,
    url: "https://github.com/gregnb/mui-datatables"
  }
];

const menuListTheme = [
  {
    id: 8,
    name: "MaterialBasic",
    component: <MaterialBasic />,
    icon: <ColorLensIcon />,
    url: "https://material-ui.com/"
  },
  {
    id: 11,
    name: "MaterialSignIn",
    component: <MaterialSignIn />,
    icon: <ColorLensIcon />,
    url: "https://material-ui.com/getting-started/page-layout-examples/"
  },
  {
    id: 12,
    name: "MaterialCheckout",
    component: <MaterialCheckout />,
    icon: <ColorLensIcon />,
    url: "https://material-ui.com/getting-started/page-layout-examples/"
  },
  {
    id: 13,
    name: "AntBasic",
    component: <AntBasic />,
    icon: <ColorLensIcon />,
    url: "https://ant.design/docs/react/introduce"
  },
  {
    id: 14,
    name: "AntForm",
    component: <AntForm />,
    icon: <ColorLensIcon />,
    url: "https://material-ui.com/getting-started/page-layout-examples/"
  },
  {
    id: 15,
    name: "AntDrawer",
    component: <AntDrawer />,
    icon: <ColorLensIcon />,
    url: "https://material-ui.com/getting-started/page-layout-examples/"
  }
];

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

export class ButtonAppBar extends Component {
  state = {
    open: false,
    setOpen: false,
    contents: <MaterialBasic />,
    menuTitle: "MaterialBasic",
    menuUrl: "https://material-ui.com/"
  };

  handleDrawerOpen = () => {
    this.setState({
      open: true,
      setOpen: true
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false,
      setOpen: false
    });
  };

  _menuClick = (title, component, url) => {
    this.setState({
      menuTitle: title,
      contents: component,
      menuUrl: url
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <a
                href={this.state.menuUrl}
                target="_blank"
                className="AppBarTitle"
              >
                {this.state.menuTitle}
              </a>
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {menuListCalendar.map((item, index) => (
              <ListItem
                button
                key={item.id}
                onClick={() =>
                  this._menuClick(item.name, item.component, item.url)
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuListScheduler.map((item, index) => (
              <ListItem
                button
                key={item.id}
                onClick={() => this._menuClick(item.name, item.component)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuListGrid.map((item, index) => (
              <ListItem
                button
                key={item.id}
                onClick={() => this._menuClick(item.name, item.component)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuListTheme.map((item, index) => (
              <ListItem
                button
                key={item.id}
                onClick={() => this._menuClick(item.name, item.component)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />

          {this.state.contents}
        </main>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
