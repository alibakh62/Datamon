import React from "react";
import {
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import db from './firebase'
import { useStateValue } from './StateProvider'
import { v4 as uuidv4 } from "uuid";

import "./CreateProject.css";

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Rubik"
  },
  input: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
      fontFamily: "Rubik"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    width: "50ch",
    fontFamily: "Rubik",
    fontWeight: "bold",
    fontSize: "20px"
  },
  dateField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    fontFamily: "Rubik"
  },
  formControl: {
    margin: theme.spacing(1),
    width: "25ch",
    // minWidth: 120,
    fontFamily: "Rubik"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontFamily: "Rubik"
  }
}));

const CreateProject = function () {

  const classes = useStyles();
  const [projectName, setProjectName] = React.useState();
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState(Date.now());
  const [endDate, setEndDate] = React.useState(Date.now());
  const [dataItem, setDataItem] = React.useState([]);
  const [sampleSize, setSampleSize] = React.useState(0);
  const [budget, setBudget] = React.useState(null);


  const [{ user }, dispatch] = useStateValue();
  const handleStartDate = (date) => {
    setStartDate(date)
  }
  const handleEndDate = (date) => {
    setEndDate(date)
  }
  const handleProjectName = (event) => {
    setProjectName(event.target.value)
  }
  const handleDescription = (event) => {
    setDescription(event.target.value)
  }
  const handleDataItemChange = (event) => {
    setDataItem(dataItem.concat(event.target.value))
  }
  const handleSampleSizeChange = (event) => {
    setSampleSize(event.target.value)
  }
  const handleBudget = (event) => {
    setBudget(event.target.value)
  }
  const onSumbit = (e) => {
    e.preventDefault();
    const projectId = uuidv4()
    const projectSubmitDate = Date.now()
    console.log(`project name: ${ projectName }`)
    console.log(`project id: ${ projectId }`)
    console.log(`submit date: ${ projectSubmitDate }`)
    console.log(`budget: ${ budget }`)
    console.log(`description: ${ description }`)
    console.log(`start date: ${ startDate }`)
    console.log(`end date: ${ endDate }`)
    console.log(`user_id: ${ user }`)
    console.log(`dataItem: ${ dataItem }`)
    console.log(`sampleSize: ${ sampleSize }`)
    db.collection("user_projects").add({
      project_budget: budget,
      project_data_items: dataItem,
      project_description: description,
      project_end_date: endDate,
      project_id: projectId,
      project_name: projectName,
      project_sample_size: sampleSize,
      project_start_date: startDate,
      project_submit_date: projectSubmitDate,
      user_id: user,
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  // const onSubmit = () => {
  //   db.collection("user_projects").add({
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA"
  //   })
  //   .then(function() {
  //     console.log("Document successfully written!");
  //   })
  //   .catch(function(error) {
  //     console.error("Error writing document: ", error);
  //   });
  // }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={classes.text}>Create your project</h1>
        </Grid>
        <Grid item xs={8}>
          <form className={classes.input} noValidate autoComplete="on">
            <div>
              <InputLabel className={classes.textField}>
                Project Name
              </InputLabel>
              <TextField
                className={classes.input}
                required
                id="input-project-name"
                label="required"
                defaultValue="e.g. Visits to grocery"
                variant="outlined"
                onChange={handleProjectName}
              />
              <InputLabel className={classes.textField}>Description</InputLabel>
              <TextField
                className={classes.input}
                required
                multiline
                rowsMax={3}
                id="input-project-description"
                label="required"
                defaultValue="briefly explain the project"
                variant="outlined"
                onChange={handleDescription}
              />
            </div>
          </form>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={8}>
          <InputLabel className={classes.textField}>
            Project Time Period
          </InputLabel>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.dateField}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="project-start-date"
              label="Start Date"
              value={startDate}
              onChange={handleStartDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={4}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.dateField}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="project-end-date"
              label="End Date"
              value={endDate}
              onChange={handleEndDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={8}>
          <InputLabel className={classes.textField}>Data Items</InputLabel>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="project-data-item-label">-</InputLabel>
            <Select
              labelId="project-data-item-label"
              id="project-data-item"
              value={dataItem}
              onChange={handleDataItemChange}
              label="-"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Location Services"}>Location Services</MenuItem>
              <MenuItem value={"App Usage"}>App Usage</MenuItem>
              <MenuItem value={"Action"}>Action</MenuItem>
            </Select>
          </FormControl>
          <InputLabel className={classes.textField}>Sample Size</InputLabel>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="project-sample-size-label">-</InputLabel>
            <Select
              labelId="project-sample-size-label"
              id="project-sample-size"
              value={sampleSize}
              onChange={handleSampleSizeChange}
              label="-"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"<1000"}>less than 1000</MenuItem>
              <MenuItem value={" <10,000"}>less than 10,000</MenuItem>
              <MenuItem value={"10,000+"}>10,000 plus</MenuItem>
            </Select>
          </FormControl>
          <InputLabel className={classes.textField}>Budget</InputLabel>
          <TextField
            className={classes.formControl}
            required
            id="project-budget"
            label="required"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            onChange={handleBudget}
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={8}>
          <Button
            className={classes.textField}
            variant="contained"
            color="primary"
            onClick={onSumbit}>
            CREATE PROJECT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateProject;
