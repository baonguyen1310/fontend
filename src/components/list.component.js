import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
const ListEmployee = ({ employees }) => (
  <div>
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email Address</Table.HeaderCell>
          <Table.HeaderCell>Phone Number</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {employees.map((data) => {
          console.log(employees);
          return (
            <Table.Row>
              <Table.Cell>{data.first_name}</Table.Cell>
              <Table.Cell>{data.last_name}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              <Table.Cell>{data.number}</Table.Cell>
              <Table.Cell>{data.gender}</Table.Cell>
              <Link to="/update">
                <Table.Cell>
                  <Button>Update</Button>
                </Table.Cell>
              </Link>
              <Table.Cell>
                <Button>Delete</Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </div>
);
const mapStateToProps = ({ emp: { employees } }) => ({
  employees,
});
export default connect(mapStateToProps)(ListEmployee);
