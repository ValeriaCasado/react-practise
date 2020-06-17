import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Component Imports
import Inbox from './inbox';
import Message from './message';

class Home extends Component {
    render() {
        return (
            <div  style={{backgroundColor: "rgb(255, 0, 0,0.2)", margin: "5px"}}>
                <nav>
                  <ul>
                    <li>
                        <Link to="/home/inbox">Inbox</Link>
                    </li>
                    <li>
                        <Link to="/home/message">Messages</Link>
                    </li>
                    </ul>
                </nav>       
                <p>This is the Home page</p>
                    <Switch>
                        <Route path="/home/inbox">
                            <Inbox />
                        </Route>
                        <Route path="/home/message">
                            <Message />
                        </Route>
                    </Switch>
            </div>
            
          );
        }
    }
export default Home;