import React from "react";
import {Route, Switch} from "react-router-dom"
import LeaveApplication from "./leaveapplication";
import Dashboard from "./dashboard";
import GeneralSettings from "./generalsettings";
import Profile from "./profile";
import Employees from "./employees";
import LeaveCredits from "./leavecredits";

class PageContents extends React.Component {
  render() {
    // var phhome = "Dashboard" 
    // var phgeneral = "General Settings"
    // var phleaveapply = "Leave Application"
    return (
      <>
      <main>
          <Switch>
              <Route path="/" exact>
                <h2 className="mt-3 mb-3">Dashboard</h2>
                <Dashboard/>
              </Route>

              <Route path="/generalssettings" exact>
              <h2 className="mt-3 mb-3">General Settings</h2>
                <GeneralSettings/>
              </Route>

              <Route path="/leaveapplication" exact>
              <h2 className="mt-3 mb-3">Leave Application</h2>
                <LeaveApplication/>
              </Route>

              <Route path="/profile" exact>
              <h2 className="mt-3 mb-3">Profile</h2>
                <Profile/>
              </Route>

              <Route path="/employees" exact>
              <h2 className="mt-3 mb-3">Employees</h2>
                <Employees/>
              </Route>

              <Route path="/leavecredits" exact>
              <h2 className="mt-3 mb-3">Leave Credits</h2>
              <LeaveCredits/>
              </Route>

              <Route path="/leaveposting" exact>
              <h2 className="mt-3 mb-3">Post Leave Request</h2>
              </Route>

              <Route path="*" exact>
                <h2 className="mt-3 mb-3">Page Not Found</h2>
              </Route>
          </Switch>
      </main>
      </>
    );
  }
}
export default PageContents;
