import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { getEmployee } from "./Redux/Employee/employee.action";
import axios from "axios";
import ListEmployee from "./components/list.component";
class App extends React.Component {
  componentDidMount() {
    const { getEmployee } = this.props;
    axios
      .get("https://6149991107549f001755a471.mockapi.io/employees/employees")
      .then(function (d) {
        getEmployee({
          ...d.data(),
        });
      })
      .catch((e) => {});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/employee/list" component={ListEmployee} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ emp }) => ({
  employees: emp.employees,
});

const mapDispatchToProps = (dispatch) => ({
  getEmployee: (emp) => dispatch(getEmployee(emp)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
