import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './custom.css'
import TopBar from './components/TopBar';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import { FectchDonVis } from './components/DonViPage';
import { AddNewDonVi } from './components/AddDonVi';
import { TestFectchDonVis } from './components/testaxios';
import { FectchDongTbs } from './components/CRUDDongTb';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (

        <div>
            <div id="wrapper">
                <TopBar />
                <LeftSideBar />
                
                <Router>
                    <Route path="/fetch-donvi" component={FectchDonVis} />
                    <Route path="/test-fetch-donvi" component={TestFectchDonVis} />
                    <Route path="/themDonVi" component={AddNewDonVi}/>
                    <Route path="/DonVis/edit/:maDonVi" component={AddNewDonVi} />
                    <Route path="/fetch-dongtb" component={FectchDongTbs}/>
                </Router>
            </div>
            <RightSideBar/>
            <div className="rightbar-overlay" />
        </div>

    );
  }
}
