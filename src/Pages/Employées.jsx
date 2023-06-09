import React from "react";
import { Link } from "react-router-dom";
import { Table } from "../Components/table";

function Employées(props) {
  return (
    <>
      <div id="employee-div" className="container">
        <Link to="/">
          <h1 className="logo">HRnet</h1>
        </Link>
        <h2>Current Employees</h2>
        <Table employees={props.employees} />
        <div className="home-link">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
}

export default Employées