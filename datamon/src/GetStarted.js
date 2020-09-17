import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./GetStarted.css";
import { useHistory } from "react-router-dom";

export default function GetStarted() {

  const history = useHistory();

  return (
    <div className="menu">
      <ButtonGroup
        orientation="vertical"
        color="secondary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button onClick={() => history.push('/createproject')}>Create Project</Button>
        <Button>Dashboard</Button>
      </ButtonGroup>
    </div>
  );
}
