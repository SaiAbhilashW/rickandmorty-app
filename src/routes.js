/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Today from "@material-ui/icons/Today";
import Code from "@material-ui/icons/Code";
import Home from "@material-ui/icons/Home";
// core components/views for Admin layout
import HomeComponent from "views/ProjectComponents/HomeComponent.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import MeetTheDeveloperComponent from "views/ProjectComponents/MeetTheDeveloperComponent.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import CharacterOfTheDayComponent from "views/ProjectComponents/CharacterOfTheDayComponent";

const dashboardRoutes = [
  {
    layout:"admin",
    path: "/home",
    name: "Home Page",
    icon: Home,
    component: HomeComponent,
  },
  {
    layout:"admin",
    path: "/character-of-the-day",
    name: "Character of the Day",
    icon: Today,
    component: CharacterOfTheDayComponent,
  },
  {
    layout:"admin",
    path: "/meet-the-developer",
    name: "Meet the Developer",
    icon: Code,
    component: MeetTheDeveloperComponent,
  },
];

export default dashboardRoutes;
