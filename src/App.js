import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter> 
    )
  }
}

export default App


