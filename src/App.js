import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/user/Footer";
import Homepage from "./components/user/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterUser from "./components/user/RegisterUser";
import LoginUser from "./components/user/LoginUser";
import TrafficPoliceDashboard from "./components/trafficPolice/Dashboard";
import CommonPeopleDashboard from "./components/commonPeople/Dashboard";
import CentralRoomDashboard from "./components/centralRoom/Dashboard";
import AmbulanceServiceDashboard from "./components/ambulanceService/Dashboard";
import MedicalTeamDashboard from "./components/medicalTeam/Dashboard";
import RegisterTrafficViolation from "./components/trafficPolice/RegisterTrafficViolation";
import RegisterMedicalEmergency from "./components/trafficPolice/RegisterMedicalEmergency";
import SosRequest from "./components/trafficPolice/SosRequest";
import HelpRequest from "./components/trafficPolice/HelpRequest";
import TrafficViolatorList from "./components/centralRoom/TrafficViolatorList";
import FineDetails from "./components/centralRoom/FineDetails";
import TrafficViolatorDetails from "./components/centralRoom/TrafficViolatorDetails";
import TotalFineList from "./components/centralRoom/TotalFineList";
import HelpRequests from "./components/centralRoom/HelpRequests";
import ServeHelpRequest from "./components/centralRoom/ServeHelpRequest";
import AssignHelpRequest from "./components/centralRoom/AssignHelpRequest";
import MedicalEmergencyList from "./components/medicalTeam/MedicalEmergency";
import ServeMedicalEmergency from "./components/medicalTeam/ServeMedicalEmergency";
import AssignMedicalEmergency from "./components/medicalTeam/AssignMedicalEmergency";
import AssignedMedicalEmergencyAmb from "./components/ambulanceService/AssignedMedicalEmergency";
import MedicalEmergencyServed from "./components/ambulanceService/MedicalEmergencyServed";
import Profile from "./components/trafficPolice/Profile";
import ProfileAmb from "./components/ambulanceService/Profile";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ServerError from "./components/ErrorPage/ServerError";
import MyOffence from "./components/commonPeople/MyOffence";
import FindViolation from "./components/commonPeople/FindViolation";
import FindViolationResult from "./components/commonPeople/FindViolationResult";
import PaymentGateway from "./components/commonPeople/PaymentGateway/PaymentGateway";
import AmbulanceList from "./components/medicalTeam/AmbulanceList";
import TrafficPolice from "./components/centralRoom/TrafficPolice";
import TrafficPoliceById from "./components/centralRoom/TrafficPoliceById";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import TrackPayment from "./components/commonPeople/TrackPayment";
import CommonProfile from "./components/commonPeople/Profile";
import RegisterMedicalEmergencyCommon from "./components/commonPeople/RegisterMedicalEmergency";
import VerifyUser from "./components/user/VerifyUser";

class App extends Component {
  user = JSON.parse(localStorage.getItem("login") === null);
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/register-user" exact component={RegisterUser} />
            <Route path="/login-user" exact component={LoginUser} />
            <Route
              path="/traffic-police/dashboard"
              exact
              component={TrafficPoliceDashboard}
            />
            <Route path="/traffic-police/profile" exact component={Profile} />
            <Route
              path="/common-people/dashboard"
              exact
              component={CommonPeopleDashboard}
            />
            <Route
              path="/central-room/dashboard"
              exact
              component={CentralRoomDashboard}
            />
            <Route
              path="/ambulance-service/dashboard"
              exact
              component={AmbulanceServiceDashboard}
            />
            <Route
              path="/medical-team/dashboard"
              exact
              component={MedicalTeamDashboard}
            />
            <Route
              path="/traffic-police/register-traffic-violation"
              exact
              component={RegisterTrafficViolation}
            />
            <Route
              path="/traffic-police/register-medical-emergency"
              exact
              component={RegisterMedicalEmergency}
            />
            <Route
              path="/traffic-police/register-sos-request"
              exact
              component={SosRequest}
            />
            <Route
              path="/traffic-police/help-request"
              exact
              component={HelpRequest}
            />
            <Route
              path="/central-room/get-traffic-violators-list"
              exact
              component={TrafficViolatorList}
            />
            <Route
              path="/central-room/get-fine-details"
              exact
              component={FineDetails}
            />

            <Route
              path="/central-room/traffic-violator-details"
              exact
              component={TrafficViolatorDetails}
            />
            <Route
              path="/central-room/total-fine-details"
              exact
              component={TotalFineList}
            />
            <Route
              path="/central-room/pending-fine-list"
              exact
              component={TotalFineList}
            />
            <Route
              path="/central-room/paid-fine-list"
              exact
              component={TotalFineList}
            />
            <Route
              path="/central-room/help-request-list"
              exact
              component={HelpRequests}
            />
            <Route
              path="/central-room/serve-help-request"
              exact
              component={ServeHelpRequest}
            />

            <Route
              path="/central-room/assign-help-request"
              exact
              component={AssignHelpRequest}
            />
            <Route
              path="/central-room/traffic-police-profile"
              exact
              component={TrafficPoliceById}
            />

            <Route
              path="/central-room/get-traffic-police"
              exact
              component={TrafficPolice}
            />

            <Route
              path="/medical-team/get-medical-emergency"
              exact
              component={MedicalEmergencyList}
            />
            <Route
              path="/medical-team/get-ambulance"
              exact
              component={AmbulanceList}
            />
            <Route
              path="/medical-team/serve-medical-emergency"
              exact
              component={ServeMedicalEmergency}
            />
            <Route
              path="/medical-team/assign-medical-emergency"
              exact
              component={AssignMedicalEmergency}
            />
            <Route
              path="/ambulance-service/assigned-medical-emergency"
              exact
              component={AssignedMedicalEmergencyAmb}
            />
            <Route
              path="/ambulance-service/medical-emergency-served"
              exact
              component={MedicalEmergencyServed}
            />
            <Route
              path="/ambulance-service/profile"
              exact
              component={ProfileAmb}
            />

            <Route
              path="/common-people/my-offense"
              exact
              component={MyOffence}
            />
            <Route
              path="/common-people/find-violation"
              exact
              component={FindViolation}
            />
            <Route
              path="/common-people/find-violation-result"
              exact
              component={FindViolationResult}
            />

            <Route
              path="/common-people/payment-gateway"
              exact
              component={PaymentGateway}
            />

            <Route
              path="/common-people/track-payment"
              exact
              component={TrackPayment}
            />

            <Route
              path="/common-people/profile"
              exact
              component={CommonProfile}
            />
            <Route
              path="/common-people/register-medical-emergency"
              exact
              component={RegisterMedicalEmergencyCommon}
            />

            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/reset/:token" component={NewPassword} exact />
            <Route path="/verify/:token" component={VerifyUser} exact />

            <Route
              path="/internal-server-error"
              exact
              component={ServerError}
            />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
