import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmployeePage from './pages/EmployeePage';
import EmployeeListPage from './pages/EmployeeListPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/employees" component={EmployeeListPage} />
        <Route path="/employee/new" component={EmployeePage} />
      </Switch>
    </Router>
  );
};

export default App;
