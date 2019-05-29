import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import PhotoCamera from "@material-ui/icons/PhotoCamera";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import green from "@material-ui/core/colors/green";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import {
  AddToPhotosSharp,
  LocalPizza,
  LocalAirport,
  Wallpaper,
  Battery20,
  BatteryAlert,
  Face
} from "@material-ui/icons";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  icon: {
    margin: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  compoTitle: {
    padding: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(2)
  },
  badge: {
    margin: theme.spacing(2)
  },
  fab: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  inputNoneDisplay: {
    display: "none"
  }
});

export class Basic extends Component {
  state = {
    open: false,
    selectedValue: "a",
    setSelectedValue: "a",
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  };

  handleChange = event => {
    this.setState({
      selectedValue: event.target.value,
      setSelectedValue: event.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete() {
    alert("You clicked the delete icon.");
  }

  checkBoxHandleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.compoTitle}>
                Button
              </Typography>
              <div>
                <Button variant="contained" className={classes.button}>
                  Default
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Primary
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Secondary
                </Button>
                <br />
                <Button variant="outlined" className={classes.button}>
                  Default
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Primary
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                >
                  Secondary
                </Button>
                <Button variant="outlined" disabled className={classes.button}>
                  Disabled
                </Button>
                <br />
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                  <AddIcon />
                </Fab>
                <Fab
                  color="secondary"
                  aria-label="Edit"
                  className={classes.fab}
                >
                  <Icon>edit_icon</Icon>
                </Fab>
                <br />
                <IconButton
                  aria-label="Delete"
                  className={classes.margin}
                  size="small"
                >
                  <ArrowDownwardIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin}>
                  <DeleteIcon fontSize="large" />
                </IconButton>
                <br />
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="Add"
                  className={classes.fab}
                >
                  <NavigationIcon className={classes.extendedIcon} />
                  Extended
                </Fab>
                <Fab
                  variant="extended"
                  size="medium"
                  color="primary"
                  aria-label="Add"
                  className={classes.fab}
                >
                  <NavigationIcon className={classes.extendedIcon} />
                  Extended
                </Fab>
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="Add"
                  className={classes.fab}
                >
                  <NavigationIcon className={classes.extendedIcon} />
                  Extended
                </Fab>
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Delete
                  <DeleteIcon className={classes.rightIcon} />
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Send
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <Icon className={classes.rightIcon}>send</Icon>
                </Button>
                <div>
                  <IconButton className={classes.button} aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    className={classes.button}
                    aria-label="Delete"
                    disabled
                    color="primary"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    className={classes.button}
                    aria-label="Add an alarm"
                  >
                    <Icon>alarm</Icon>
                  </IconButton>
                  <IconButton
                    color="primary"
                    className={classes.button}
                    aria-label="Add to shopping cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <input
                    accept="image/*"
                    className={classes.inputNoneDisplay}
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      className={classes.button}
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
              </div>

              <Divider />
              <Typography variant="h4" className={classes.compoTitle}>
                TextField
              </Typography>
              <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="standard-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                className={classes.textField}
                margin="normal"
              />

              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <Divider />
              <Typography variant="h4" className={classes.compoTitle}>
                Badge
              </Typography>
              <div>
                <Badge
                  className={classes.badge}
                  badgeContent={4}
                  color="primary"
                >
                  <MailIcon />
                </Badge>
                <Badge
                  className={classes.badge}
                  badgeContent={10}
                  color="secondary"
                >
                  <MailIcon />
                </Badge>
                <IconButton
                  aria-label="4 pending messages"
                  className={classes.badge}
                >
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.compoTitle}>
                Icon
              </Typography>
              <Wallpaper className={classes.icon} />
              <AddToPhotosSharp className={classes.icon} color="primary" />
              <br />
              <LocalPizza className={classes.icon} />
              <LocalAirport className={classes.icon} color="primary" />
              <br />
              <BatteryAlert className={classes.icon} />
              <Battery20 className={classes.icon} color="primary" />
              <br />
              <Icon className={classes.icon}>add_circle</Icon>
              <Icon className={classes.icon} color="primary">
                add_circle
              </Icon>
              <Divider />
              <Typography variant="h4" className={classes.compoTitle}>
                Chips
              </Typography>
              <Chip
                className={classes.button}
                label="Clickable Deletable Chip"
                color="primary"
                onDelete={this.handleDelete}
                icon={<Face />}
              />
              <Divider />
              <Typography variant="h4" className={classes.compoTitle}>
                Dialog
              </Typography>
              <div>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="primary"
                  onClick={this.handleClickOpen}
                >
                  Open form dialog
                </Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      To subscribe to this website, please enter your email
                      address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                      Subscribe
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <Divider />
              <Typography variant="h4" className={classes.compoTitle}>
                Radio
              </Typography>
              <div>
                <Radio
                  checked={this.state.selectedValue === "a"}
                  onChange={this.handleChange}
                  value="a"
                  name="radio-button-demo"
                  aria-label="A"
                />
                <Radio
                  checked={this.state.selectedValue === "b"}
                  onChange={this.handleChange}
                  value="b"
                  name="radio-button-demo"
                  aria-label="B"
                />
                <GreenRadio
                  checked={this.state.selectedValue === "c"}
                  onChange={this.handleChange}
                  value="c"
                  name="radio-button-demo"
                  aria-label="C"
                />
                <Radio
                  checked={this.state.selectedValue === "d"}
                  onChange={this.handleChange}
                  value="d"
                  color="default"
                  name="radio-button-demo"
                  aria-label="D"
                />
                <Radio
                  checked={this.state.selectedValue === "e"}
                  onChange={this.handleChange}
                  value="e"
                  color="default"
                  name="radio-button-demo"
                  aria-label="E"
                  icon={<RadioButtonUncheckedIcon fontSize="small" />}
                  checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                />
              </div>
              <Divider />
              <Typography variant="h4" className={classes.compoTitle}>
                Checkbox
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.checkBoxHandleChange("checkedA")}
                      value="checkedA"
                    />
                  }
                  label="Secondary"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.checkBoxHandleChange("checkedB")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Primary"
                />
                <FormControlLabel
                  control={<Checkbox value="checkedC" />}
                  label="Uncontrolled"
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox value="checkedD" />}
                  label="Disabled"
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox checked value="checkedE" />}
                  label="Disabled"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedF}
                      onChange={this.checkBoxHandleChange("checkedF")}
                      value="checkedF"
                      indeterminate
                    />
                  }
                  label="Indeterminate"
                />
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={this.state.checkedG}
                      onChange={this.checkBoxHandleChange("checkedG")}
                      value="checkedG"
                    />
                  }
                  label="Custom color"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      value="checkedH"
                    />
                  }
                  label="Custom icon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      value="checkedI"
                    />
                  }
                  label="Custom size"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Basic.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Basic);
